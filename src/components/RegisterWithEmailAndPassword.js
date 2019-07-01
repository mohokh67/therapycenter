import React, {useState, useEffect} from 'react';
import { useInput } from './../hooks/useInput';

export default props => {
  const [fullname, setFullname] = useState('');
  // const [email, setEmail] = useState('');
  // const [mobile, setMobile] = useState('');
  // const [password, setPassword] = useState('');

  // const { value:fullname, bind:setFullname, reset: resetFullname } = useInput('');
  const { value: email, bind: setEmail, reset: resetEmail } = useInput('');
  const { value: mobile, bind: setMobile, reset: resetMobile } = useInput('');
  const { value: password, bind: setPassword, reset: resetPassword } = useInput('');


  // const handleChange = event => {
  //   set[event.target.name] = event.target.value;
  // }


  return (
    <>
      <div className="field">
        <label className="label">Full name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Full name"
            value={fullname}
            onChange={e => setFullname(e.target.value)}

          />
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="email" placeholder="Email address" {...setEmail} />
        </div>
      </div>

      <div className="field">
        <label className="label">Telephone or Mobile</label>
        <div className="control">
          <input className="input" type="text" placeholder="Telephone or mobile number" {...setMobile} />
        </div>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="password" {...setPassword}/>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Register</button>
        </div>
        <div className="control">
          <button className="button is-light">Cancel</button>
        </div>
      </div>
    </>
  )
}