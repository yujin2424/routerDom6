import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    const activeStyle={
        background: '#ddd'
    }
   return (
      <div className="nav">
         <ul>
            <li><NavLink style={({isActive}) =>(isActive?activeStyle:undefined)} to="/">홈</NavLink></li>
            <li><NavLink style={({isActive}) =>(isActive?activeStyle:undefined)} to="company">회사 소개</NavLink></li>
            <li><NavLink style={({isActive}) =>(isActive?activeStyle:undefined)} to="cooperation">제휴 문의</NavLink></li>
            <li><NavLink style={({isActive}) =>(isActive?activeStyle:undefined)} to="store">매장 안내</NavLink></li>
            <li><NavLink style={({isActive}) =>(isActive?activeStyle:undefined)} to="customercare">고객 서비스</NavLink></li>
            <li><NavLink style={({isActive}) =>(isActive?activeStyle:undefined)} to="booksearch">매장 도서검색</NavLink></li>
            <li><NavLink style={({isActive}) =>(isActive?activeStyle:undefined)} to="scm">SCM</NavLink></li>
         </ul>
      </div>
   );
};

export default Nav;