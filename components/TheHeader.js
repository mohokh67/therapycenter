import Router from 'next/router';
import NProgress from 'nprogress';

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

const imageStyle = {
  width: '100%'
};

export default () => (
  <header>
    <div className="container is-fluid">
      <img src="/static/img/header.jpg" alt="Header image" style={imageStyle} />
    </div>
  </header>
);
