import React from 'react';
import "./Main.css";
import Signup from "./Signup.jsx";
import Notifications from "./Notifications.jsx";
import Testimonials from './Testimonials.jsx';

export default function Main() {
  return (
    <div>
    <div className='main'>
        <div className='leftside'>
            <Notifications/>
            <Testimonials/>
        </div>
        <div className='rightside'>
        <Signup />
        </div>
    </div>
    </div>
  )
}
