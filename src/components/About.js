import React from 'react';
import {Helmet} from "react-helmet";
import ali from './../assets/img/ali.jpg'

export default () => {
  return (
    <div className="container is-size-5 about">
      <Helmet>
        <title>About - Sports Massage Therapy Center</title>
      </Helmet>
    <div className="columns">
    <div className="column is-10 is-offset-1">
      <p>I’m sure that all my customer would like to receive excellent massage, to help them feel relaxed, refreshed and invigorated. After 10 years, working with athletes in a variety of sports and providing massage for other people, I have gained a new view of life about how I can assist all of them.</p>

      <p>I am a qualified massage therapist ( Level 3 Deep Tissue & Sports Massage)  at the City of Bristol College.</p>

      <p>If you think that you could benefit from Massage Therapy I would be pleased to discuss any questions or concerns you may have. Please feel free to contact me at <strong><a href="tel:07935636185">07935636185</a></strong> or Email <strong><a href='mailto:uktherapycenter@gmail.com'>uktherapycenter@gmail.com</a></strong>.</p>

      <p>I would welcome the opportunity to work with any health and wellness team.</p>

      <div>Yours in good health,<br />
        <img src={ali} alt="Ali - The thrapist" />
      </div>
    </div>
    </div>

    </div>
  )
};
