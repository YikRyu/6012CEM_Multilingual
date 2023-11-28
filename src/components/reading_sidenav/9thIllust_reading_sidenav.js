//side nav ref: https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar
//collapsible ref: https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/ 

import { useNavigate } from 'react-router-dom';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';
import {useCollapse} from 'react-collapsed';
import './reading_sidenav.css';
import '../../css/style.css';
import Cover from '../../assets/java_9th_illust.jpg';
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
            <p><span style={{fontSize:'30px'}}>Introduction to Java Programming - Comprehensive Version</span><br/>
            Y. Daniel Yang <br/>
            Pearson Prentice Hall <br/>
            2013 <br/>
            English <br/>
            9th illustrated edition <br/>
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
                            <tr><th className='reading-toc-title'>Cahpter 1: Undeerstanding the Languages of the Web</th><th className='reading-toc-pg'>7</th></tr>
                            <tr><td className='reading-toc-title'>Understanding How the Web Works</td><td className='reading-toc-pg'>7</td></tr>
                            <tr><td className='reading-toc-title'>Understanding Web Page Languages</td><td className='reading-toc-pg'>10</td></tr>
                            <tr><td className='reading-toc-title'>Understanding the Language of Web Servers</td><td className='reading-toc-pg'>14</td></tr>
                            <tr><td className='reading-toc-title'>Choosing How You Want to Develop</td><td className='reading-toc-pg'>14</td></tr>
                            <tr><td className='reading-toc-title'>Setting Up Your Local Computer for Development</td><td className='reading-toc-pg'>19</td></tr>
                        </table>
                    </div>
                </div>
            </div>

            <button className='reading-sidenav-btn' type='button' onClick={()=>navigate('/home')}><img className='reading-sidenav-icon' src={HomeIcon} />Home</button>

            <button className='reading-sidenav-btn' type='button' onClick={()=>navigate('/detail9thIllust')}><img className='reading-sidenav-icon' src={InfoIcon} />Book Details</button>

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
                    <h1 className='reading-edition-title'>Other Edition</h1>  
                        <div class='reading-edition-container'>
                            <p style={{fontSize:25}}>5th Edition</p>
                            <div style={{display:'flex', justifyContent:'flex-end',}}>
                            <button className='reading-edition-btn' type='button' onClick={()=>navigate('/detail5thIllust')} >Book Details</button>
                            <button style={{marginLeft:'15px'}} className='reading-edition-btn' type='button' onClick={()=>navigate('/reading5thIllust')} >Read</button>
                            </div>
                        </div>

                    <h1 className='reading-edition-title'>Other Language</h1>  
                    <div class='reading-edition-container'>
                        <p style={{fontSize:25,}}>Chinese Edition</p>
                        <div style={{display:'flex', justifyContent:'flex-end',}}>
                            <button className='reading-edition-btn' type='button' onClick={()=>navigate('/detailCnEdition')} >Book Details</button>
                            <button style={{marginLeft:'15px'}} className='reading-edition-btn' type='button' onClick={()=>navigate('/purchaseCnEdition')} >Purchase</button>
                        </div>
                    </div>

                    <div style={{textAlign:'center'}}>
                        <button className='modal-close-btn' type='button' onClick={handleEditionClose}>Close</button>
                    </div>
                </Modal>
        </div>
        
    </Menu>
  );
};