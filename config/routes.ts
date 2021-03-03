export default [
 
  {
    path: '/',
    component: '../components/BlankLayout',
    authority: ['admin', 'user'],
    routes: [
      // 默認跳轉至課程列表頁
      {
        path: '/',
        redirect: '/group/home',
      },
      {
        path:'/ssoRedirect',
        component:'./ssoRedirect/index'
      },
      // 课程
      {
        path: '/group/home',
        routes: [
          // 课程列表
          {
            path: '/group/home',
            name: 'home',
            component: './home',
          },
          // 课程詳情
          {
            path: '/group/home/detail',
            name: 'home.detail',
            component: './home/detail',
          },
         
        ],
      },
    
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
