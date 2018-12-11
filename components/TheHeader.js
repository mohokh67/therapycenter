import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import TheNavbar from './TheNavbar';

Router.onRouteChangeStart = () => {
  console.log('onRouteChangeStart triggered');
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  console.log('onRouteChangeComplete triggered');
  NProgress.done();
};
Router.onRouteChangeError = () => {
  console.log('onRouteChangeError triggered');
  NProgress.done();
};
const headerStyle = {
  borderBottom: '1px solid #3EC6E0'
};

export default () => (
  <header>
    <div className="container is-fluid ">gfdfgfdgd</div>
  </header>
);
