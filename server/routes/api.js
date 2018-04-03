/**
 * 自动处理 /api/** 请求代理接口
 */
import crypto from 'crypto';
import FormData from 'form-data';
import config from '../config';
import ApiClientNode from '../utils/http/apiClientNode';
import { getHeaders,getNoPrefixUrl } from '../utils/config/common';
var video = require("../modules/videos")
var logger = require('log4js').getLogger("api");
const router = require('express').Router();

// 根据视频ID获取视频 // TODO 需要做安全校验
router.get("/videos/:vid",function (req,res,next) {
  var vid = req.params.vid;
  video.getVideoUrl(vid,function (status,result) {
    logger.info("请求返回的状态码:" + status + "<<<返回的数据:" + JSON.stringify(result));
    if (status == 200) {
      return res.json(result);
    } else {
      logger.error("请求服务发生异常!");
      return res.json(null);
    }
  })
});

/**
 * 自动处理所有请求
 */
router.all('*', function(req, res, next) {
    // 准备请求
    const apiClient = new ApiClientNode({ prefix: config.apiPrefix });
    const url = getNoPrefixUrl(req.path, req.query);
    const body = res.locals.body || req.body; //TODO
    const ip = req.ip.replace(/[^\d]*(\d+(\.\d+){3})[^\d]*/, '$1');
    const headers = getHeaders(req, body instanceof FormData ? ApiClientNode.CONTENT_TYPE_MULTI : req.get(ApiClientNode.HEADER_CONTENT_TYPE));
    // 发起请求
    apiClient.request(req.method, url, body, headers)
        .then(function(result) {
            // 检查如果是登录接口调用，需要写cookie
            if (/v\d+\/sso\/(?:login|register)$/.test(req.path) && result.data.ticket) {
                let expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
                // 翻转、加盐、base64
                const salt = '0ZSGxuBkSJS5';
                let sup = result.data.ticket.split('').reverse().join('');
                let token = salt + sup + Math.random();
                sup = new Buffer(token).toString('base64');
                // yii格式加密 hmac sha256
                let serialize = `a:2:{i:0;s:4:"_SUP";i:1;s:${sup.length}:"${sup}";}`;
                let hamc = crypto.createHmac('sha256', 'VzpR5JMDNqUsOZ0IFQARNLU9_0KLr9UC');
                hamc.update(serialize);
                sup = hamc.digest('hex') + serialize;
                // 设置到cookie
              //  let opts = {path: '/', domain: '.cfcedu.org.cn'};
                let opts = {path: '/', domain: 'localhost'};
                if (req.body.remember) {
                    opts.expires = expires;
                }
                res.cookie('_SUP', sup, opts);
            }
            res.json(result);
        }, function(err) {
            res.json({
                status : err && err.status || 455,
                message: err && err.message || 'Request bad.'
            });
        });
});


module.exports = router;
