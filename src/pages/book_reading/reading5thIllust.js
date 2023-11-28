import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../css/style.css';
import Cover from '../../assets/java_5th_illust.jpg';
import GlobeIcon from '../../assets/icons/globe_icon.png';
import BookmarkIcon from '../../assets/icons/bookmark_icon.png';
import TocIcon from '../../assets/icons/toc_icon.png';
import ZoomInIcon from '../../assets/icons/zoomIn_icon.png';
import ZoomOutIcon from '../../assets/icons/zoomOut_icon.png';
import CloseIcon from '../../assets/icons/close_icon.png';
import HomeIcon from '../../assets/icons/home_icon.png';
import Sidebar from '../../components/reading_sidenav/5thIllust_reading_sidenav';
import Modal from '../../components/modals/modal';
import Page1 from '../../assets/illust_pages/1.png';
import Page2 from '../../assets/illust_pages/2.png';
import Page3 from '../../assets/illust_pages/3.png';
import Page4 from '../../assets/illust_pages/4.png';
import Page5 from '../../assets/illust_pages/5.png';


function Reading5thIllust() {
  const navigate = useNavigate();
  const [editionOpen, setEditionOpen] = useState(false);
  const [bookmarkOpen, setBookmarkOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);
 
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

    const handleTocClose = () => {
        setTocOpen(false);
    };
    const handleTocOpen = () => {
        setTocOpen(true);
    };

  return (
    <div className="page-wrapper" id="outer-container">
        <div className='header'>
            <Sidebar pageWrapId={'reading-wrap'} outerContainerId={'outer-container'} />
            <h1 className='header-title'>Introduction to Java Programming - Comprehensive Version</h1>
            <div className='reading-header-quickbtn-container'>
                <button className='reading-header-quickbtn' type='button' onClick={()=>navigate('/home')}><img className='reading-header-quickbtn-icon' src={HomeIcon}/></button>
                <button className='reading-header-quickbtn' type='button' onClick={handleEditionOpen}><img className='reading-header-quickbtn-icon' src={GlobeIcon}/></button>
                <Modal isOpen={editionOpen} onClose={handleEditionClose}>
                    <button className='modal-icon-btn' type='button' onClick={handleEditionClose}><img className="modal-close-icon" src={CloseIcon}/></button> <br/>
                    <h1 className='reading-edition-title'>Other Edition</h1>  
                        <div class='reading-edition-container'>
                            <p style={{fontSize:25}}>9th Edition</p>
                            <div style={{display:'flex', justifyContent:'flex-end',}}>
                            <button className='reading-edition-btn' type='button' onClick={()=>navigate('/detail9thIllust')} >Book Details</button>
                            <button style={{marginLeft:'15px'}} className='reading-edition-btn' type='button' onClick={()=>navigate('/purchase9thIllust')} >Purchase</button>
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


                <button className='reading-header-quickbtn' type='button' onClick={handleBookmarkOpen}><img className='reading-header-quickbtn-icon' src={BookmarkIcon}/></button>
                <Modal isOpen={bookmarkOpen} onClose={handleBookmarkClose}>
                    <button className='modal-icon-btn' type='button' onClick={handleBookmarkClose}><img className="modal-close-icon" src={CloseIcon}/></button> <br/>
                    <h1 style={{textAlign:'center'}}>Bookmarked current page!</h1>  
                    <div style={{textAlign:'center'}}>
                        <button className='modal-close-btn' type='button' onClick={handleBookmarkClose}>Okay</button>
                    </div>
                </Modal>

                <button className='reading-header-quickbtn' type='button' onClick={handleTocOpen}><img className='reading-header-quickbtn-icon' src={TocIcon}/></button>
                <Modal isOpen={tocOpen} onClose={handleTocClose}>
                    <button className='modal-icon-btn' type='button' onClick={handleTocClose}><img className="modal-close-icon" src={CloseIcon}/></button> <br/>
                    <h1 style={{textAlign:'center'}}>Table of Content</h1>  
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
                    <div style={{textAlign:'center'}}>
                        <button className='modal-close-btn' type='button' onClick={handleTocClose}>Close</button>
                    </div>
                </Modal>

            </div>
        </div>

        <div className='reading-zoom-container'>
            <button className='reading-zoom-btn'><img className='reading-zoom-btn-icon' src={ZoomInIcon}/></button>
            <button className='reading-zoom-btn'><img className='reading-zoom-btn-icon' src={ZoomOutIcon}/></button>
        </div>
        
        <div className='reading-content-container'>
            <div className='reading-content-img-container'><img className='reading-content-img' src={Page1}/></div>
            <div className='reading-content-img-container'><img className='reading-content-img' src={Page2}/></div>
            <div className='reading-content-img-container'><img className='reading-content-img' src={Page3}/></div>
            <div className='reading-content-img-container'><img className='reading-content-img' src={Page4}/></div>
            <div className='reading-content-img-container'><img className='reading-content-img' src={Page5}/></div>
        </div>
    </div>
  );
}

export default Reading5thIllust;
