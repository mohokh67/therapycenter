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
  <header
    className="has-background-grey-dark has-text-white-ter"
    style={headerStyle}
  >
    <div className="container is-fluid ">
      <div className="level">
        <div className="level-left">
          <h1 className="is-size-1">
            <Link href="/">
              <a className="has-text-white-ter">Therapy Center</a>
            </Link>
          </h1>
        </div>
        <div className="level-right">
          <TheNavbar />
        </div>
      </div>
    </div>
  </header>
);
