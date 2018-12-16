import Head from 'next/head';

export default props => (
  <Head>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta charSet="utf-8" />

    <meta
      name="description"
      content="Best Sports massages, Deep Tissue Massage, Remedial Massage and Holistic Massage in Bishopston and Ashley donwn Bristol"
    />

    <title>Sports Massage | Therapy Center Bristol | {props.pageTitle}</title>

    <link rel="shortcut icon" href="/static/favicon.png" />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/styles.css" />

    <meta
      name="google-site-verification"
      content="kP91tYs2EP77pL2jmBeSZqdiZbaNMUfBU1WiPoyL0sM"
    />

    {/* <!-- Google Tag Manager --> */}
    <script>{`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P5D66VX');
    `}</script>
  </Head>
);
