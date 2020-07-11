import index from 'pages';
import notFound from 'pages/notFound';
import mineRouter from 'pages/mine/router';
import blogRouter from 'pages/blog/router';
import historyRouter from 'pages/history/router';
import articleRouter from 'pages/article/router';

/**
 * 路由配置
 */
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: index,
    children: [
      ...mineRouter,
      ...blogRouter,
      ...historyRouter,
      ...articleRouter
    ]
  },
  {
    path: '*',
    component: notFound
  }
];

export default routes;
