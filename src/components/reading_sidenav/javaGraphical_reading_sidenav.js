//side nav ref: https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar
//collapsible ref: https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ 

import { useNavigate } from 'react-router-dom';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';
import {useCollapse} from 'react-collapsed';
import './reading_sidenav.css';
import '../../css/style.css';
import Cover from '../../assets/java_graphical.jpg';
import HomeIcon from '../../assets/icons/home_icon.png';
import GlobeIcon from '../../assets/icons/globe_icon.png';
import TocIcon from '../../assets/icons/toc_icon.png';
import BookmarkIcon from '../../assets/icons/bookmark_icon.png';
import DropdownIcon from '../../assets/icons/dropdown_icon.png';
import CloseIcon from '../../assets/icons/close_icon.png';
import InfoIcon from '../../assets/icons/info_icon.png';
import Modal from '../modals/modal';

export default props => {
    const navigate = useNavigate();
    const [editionOpen, setEditionOpen] = useState(false);
    const [bookmarkOpen, setBookmarkOpen] = useState(false);
    const [ isExpanded, setExpanded ] = useState(true);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    function handleCollapseOnClick() {
        setExpanded(!isExpanded);
    }

    const handleEditionClose = () => {
        setEditionOpen(false);
    };
    const handleEditionOpen = () => {
        setEditionOpen(true);
    };

    const handleBookmarkClose = () => {
        setBookmarkOpen(false);
    };
    const handleBookmarkOpen = () => {
        setBookmarkOpen(true);
    };

  return (
    <Menu>
        <div className='reading-sidenav-container'>
        <img className='cover' src={Cover} />
            <p><span style={{fontSize:'30px'}}>Java: Graphical User Interface</span><br/>
            David Etheridge <br/>
            Ventus Publishing ApS <br/>
            2009 <br/>
            English <br/>
            N/A <br/>
            </p>
            

            <div className="collapsible">
                <div className="collapsible-header" {...getToggleProps({onClick: handleCollapseOnClick})}>
                    <img className='reading-sidenav-icon' src={TocIcon}/>
                    <p style={{fontSize:'30px'}}>Table of Content</p>
                    <img className='reading-sidenav-icon' src={DropdownIcon}/>
                </div>
                <div {...getCollapseProps()}>
                    <div className="collapsible-content">
                        <table className='reading-toc-content-table'>
                            <tr><th className='reading-toc-title'>1.The Input/Output Package</th><th className='reading-toc-pg'>6</th></tr>
                            <tr><td className='reading-toc-title'>1.1 An Introduction to Streams </td><td className='reading-toc-pg'>7</td></tr>
                            <tr><td className='reading-toc-title'>1.2 Categories of Streams and their Classes  </td><td className='reading-toc-pg'>7</td></tr>
                            <tr><td className='reading-toc-title'>1.3 Using Streams</td><td className='reading-toc-pg'>11</td></tr>
                            <tr><td className='reading-toc-title'>1.1 An Introduction to Streams</td><td className='reading-toc-pg'>19</td></tr>
                            <tr><td className='reading-toc-title'>1.4 Object Streams</td><td className='reading-toc-pg'>21</td></tr>
                            <tr><td className='reading-toc-title'>1.6 Data Streams</td><td className='reading-toc-pg'>25</td></tr>
                            <tr><td className='reading-toc-title'>1.7 Summary of Streams</td><td className='reading-toc-pg'>27</td></tr>
                        </table>
                    </div>
                </div>
            </div>

            <button className='reading-sidenav-btn' type='button' onClick={()=>navigate('/home')}><img className='reading-sidenav-icon' src={HomeIcon} />Home</button>

            <button className='reading-sidenav-btn' type='button' onClick={()=>navigate('/detailJavaGraphical')}><img className='reading-sidenav-icon' src={InfoIcon} />Book Details</button>

            <button className='reading-sidenav-btn' type='button' onClick={handleBookmarkOpen}><img className='reading-sidenav-icon' src={BookmarkIcon} />Bookmark</button>
            <Modal isOpen={bookmarkOpen} onClose={handleBookmarkClose}>
                <button className='modal-icon-btn' type='button' onClick={handleBookmarkClose}><img className="modal-close-icon" src={CloseIcon}/></button> <br/>
                <h1 style={{textAlign:'center'}}>Bookmarked current page!</h1>  
                <div style={{textAlign:'center'}}>
                    <button className='modal-close-btn' type='button' onClick={handleBookmarkClose}>Okay</button>
                </div>
            </Modal>

            <button className='reading-sidenav-btn' type='button' onClick={handleEditionOpen}><img className='reading-sidenav-icon' src={GlobeIcon} />Other Edition/Language</button>
            <Modal isOpen={editionOpen} onClose={handleEditionClose}>
                <button className='modal-icon-btn' type='button' onClick={handleEditionClose}><img className="modal-close-icon" src={CloseIcon}/></button> <br/>
                <h1 style={{textAlign:'center'}}>There is no other edition/language edition for this book...</h1>  
                <div style={{textAlign:'center'}}>
                    <button className='modal-close-btn' type='button' onClick={handleEditionClose}>Close</button>
                </div>
            </Modal>
        </div>
        
    </Menu>
  );
};