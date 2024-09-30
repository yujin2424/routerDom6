import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
   return (
      <div className='footer'>
         <div className="footer-inner">
            <div className="sns-wrap">
               <div className="sns-insta">
                  <Link to =""><img src={process.env.PUBLIC_URL+ '/img/f-insta.png'} alt="sns 인스타 아이콘" /></Link>
               </div>
               <div className="sns-talk">
                  <Link to=""><img src={process.env.PUBLIC_URL+ '/img/f-talk.jpg'} alt="sns 카카오톡 아이콘" /></Link>
               </div>
            </div>
            <div className="addr-wrap">
               <address>
               Copyright © LIBRO. All rights reserved.  Business Registration No: [105-81-68075]
               <br />
               Address : 171, Munbal-ro, Paju-si, Gyeonggi-do. Tell : 1600-2518
               </address>
            </div>
         </div>
      </div>
   );
};

export default Footer;