import index from '../pages';
// import pageOne from '../pages/pageOne';
// import pageTwo from '../pages/pageTwo';
// import pageThree from '../pages/pageThree';

const router = [
  {
    path: 'mine',
    component: index,
    children: [
      // {
      //   path: '',
      //   redirect: 'pageOne'
      // },
      // {
      //   path: 'pageOne',
      //   component: pageOne
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
  }
];

export default router;
