import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Index = (resolve) => {
  import('components/index/index').then((module) => {
    resolve(module)
  })
}
const Course = (resolve) => {
  import('components/course/course').then((module) => {
    resolve(module)
  })
}
const Lecturer = (resolve) => {
  import('components/lecturer/lecturer').then((module) => {
    resolve(module)
  })
}
const lecturerDetail = (resolve) => {
  import('components/lecturer/lecturer-detail').then((module) => {
    resolve(module)
  })
}
const Introduce = (resolve) => {
  import('components/introduce/introduce').then((module) => {
    resolve(module)
  })
}
const cfccIntroduce = (resolve) => {
  import('components/introduce/cfcc-introduce').then((module) => {
    resolve(module)
  })
}
const cfcIntroduce = (resolve) => {
  import('components/introduce/cfc-introduce').then((module) => {
    resolve(module)
  })
}
const Certifies = (resolve) => {
  import('components/certifies/certifies').then((module) => {
    resolve(module)
  })
}
const cfccCertifies = (resolve) => {
  import('components/certifies/cfc-certifies').then((module) => {
    resolve(module)
  })
}
const cfcCertifies = (resolve) => {
  import('components/certifies/cfc-certifies').then((module) => {
    resolve(module)
  })
}
const continuingEducation = (resolve) => {
  import('components/continuing-education/continuing-education').then((module) => {
    resolve(module)
  })
}
const News = (resolve) => {
  import('components/news/news').then((module) => {
    resolve(module)
  })
}
const About = (resolve) => {
  import('components/about/about').then((module) => {
    resolve(module)
  })
}
const cfc = (resolve) => {
  import('components/about/cfc').then((module) => {
    resolve(module)
  })
}
const CooperationAgency = (resolve) => {
  import('components/about/cooperation-agency').then((module) => {
    resolve(module)
  })
}
const ConcessionaryAgency = (resolve) => {
  import('components/about/concessionary-agency').then((module) => {
    resolve(module)
  })
}
const Contact = (resolve) => {
  import('components/about/contact').then((module) => {
    resolve(module)
  })
}
const Join = (resolve) => {
  import('components/about/join').then((module) => {
    resolve(module)
  })
}
const newsDetail = (resolve) => {
  import('components/news/news-detail').then((module) => {
    resolve(module)
  })
}
const login = (resolve) => {
  import('components/course/course').then((module) => {
    resolve(module)
  })
}
const member = (resolve) => {
  import('components/user/member').then((module) => {
    resolve(module)
  })
}
const video = (resolve) => {
  import('components/course/videos').then((module) => {
    resolve(module)
  })
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/introduce/cfcc-introduce'
    },
    {
      path: '/index',
      component: Index,
      meta: {
        title: '公司金融国际职业资格认证执行委员秘书处(中国)官网'
      }
    },
    {
      path: '/course',
      component: Course,
      meta: {
        title: '全部课程'
      }
    },
    {
      path: '/lecturer',
      component: Lecturer,
      meta: {
        title: '讲师'
      }
    },
    {
      path: '/lecturer/:id',
      component: lecturerDetail
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/news/:id',
      component: newsDetail
    },
    {
      path: '/about',
      component: About,
      redirect: '/about/cfc',
      children: [
        {
          path: 'cfc', component: cfc,
          meta: {
            title: 'CFC秘书处'
          }
        },
        {
          path: 'contact', component: Contact,
          meta: {
            title: '联系我们'
          }
        },
        {
          path: 'join', component: Join,
          meta: {
            title: '加入我们'
          }
        },
        {
          path: 'cooperation-agency', component: CooperationAgency,
          meta: {
            title: '特许机构'
          }
        },
        {
          path: 'concessionary-agency', component: ConcessionaryAgency,
          meta: {
            title: '合作机构'
          }
        }
      ]
    },
    {
      path: '/introduce',
      component: Introduce,
      children: [
        {
          path: 'cfcc-introduce', component: cfccIntroduce,
          meta: {
            title: 'CFCC介绍'
          }
        },
        {
          path: 'cfc-introduce', component: cfcIntroduce,
          meta: {
            title: 'CFC介绍'
          }
        }
      ]
    },
    {
      path: '/certifies',
      component: Certifies,
      children: [
        {
          path: 'cfcc-certifies', component: cfccCertifies
        },
        {
          path: 'cfc-certifies', component: cfcCertifies
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: member
    },
    {
      path: '/video',
      name: 'video',
      component: video
    }
  ]
})
