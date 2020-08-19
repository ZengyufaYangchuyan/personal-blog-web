// import index from '../pages';
// import blogDetail from '../pages/blogDetail';
// import pageTwo from '../pages/pageTwo';
// import pageThree from '../pages/pageThree';

const router = [
  {
    path: '',
    redirect: 'blog'
  },
  {
    path: 'blog',
    component: () => import('../pages'),
    children: [
      // {
      //   path: '',
      //   redirect: 'pageOne'
      // },
      // {
      //   path: 'pageTwo',
      //   component: pageTwo
      // },
      // {
      //   path: 'pageThree',
      //   component: pageThree
      // },
    ]
  },
  {
    path: 'blog-detail',
    component: () => import('../pages/blogDetail')
  }
];

export default router;
