//side nav ref: https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidenav.css';
import UserBanner from './assets/user_banner.jpg';
import UserPFP from './assets/user_pfp.jpg';
import HomeIcon from './assets/icons/home_icon.png';
import UserIcon from './assets/icons/user_icon.png';
import MyBooksIcon from './assets/icons/my_books_icon.png';
import RefundRequestsIcon from './assets/icons/refund_icon.png';
import RefundPoliciesIcon from './assets/icons/info_icon.png';
import LogoutIcon from './assets/icons/logout_icon.png';
import BookmarkIcon from './assets/icons/bookmark_icon.png';

export default props => {
  return (
    <Menu className='normal'>
    <div>
        <div className='user-banner-container'>
            <img className="user-banner" src={UserBanner} />
        </div>

        <div className='user-pfp-container'>
            <img className='user-pfp' src={UserPFP}/>
        </div>

        <div className='user-email-container'>
            <p className='user-email'>example@mail.com</p>
        </div>
        
    </div>

    <div className='spacing'></div>
    
    <div className='menu-item'>
        <img className='sidenav-icon' src={HomeIcon}/>
        <a className='bm-item-text' href="/home">    Home</a>
    </div>
    

    <div className='menu-item'>
        <img className='sidenav-icon' src={UserIcon}/>
        <a className='bm-item-text' href="/userProfile">    User Profile</a>
    </div>
    
    <div className='menu-item'>
        <img className='sidenav-icon' src={MyBooksIcon}/>
        <a className='bm-item-text' href="/myBooks">    My Books</a>
    </div>

    <div className='menu-item'>
        <img className='sidenav-icon' src={BookmarkIcon}/>
        <a className='bm-item-text' href="/bookmarks">  Bookmarks</a>
    </div>

    <div className='menu-item'>
        <img className='sidenav-icon' src={RefundRequestsIcon}/>
        <a className='bm-item-text' href="/refundRequests">    Refund Requests</a>
    </div>

    <div className='menu-item'>
        <img className='sidenav-icon' src={RefundPoliciesIcon}/>
        <a className='bm-item-text' href="/refundPolicies"> Refund Policies</a>
    </div>

    <div className='menu-item'>
        <img className='sidenav-icon' src={LogoutIcon}/>
        <a className='bm-item-text' href="/">  Logout</a>
    </div>
    </Menu>
  );
};