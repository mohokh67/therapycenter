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

export default () => (
  <div>
    <div>
      <h1>
        <Link href="/">
          <a>Therapy Center</a>
        </Link>
      </h1>
      <TheNavbar />
    </div>
  </div>
);
