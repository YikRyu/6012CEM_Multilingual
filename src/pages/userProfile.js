//seletor ref: https://www.w3schools.com/howto/howto_custom_select.asp 

import { useState, useEffect} from 'react';
import '../css/style.css';
import Modal from '../components/modals/modal.js';
import Header from '../header.js';
import CloseIcon from '../assets/icons/close_icon.png';
import UserPFP from '../assets/user_pfp.jpg';

function UserProfile() {
    const [passwordOpen, setPasswordOpen] = useState(false);
    const [paymentOpen, setPaymentOpen] = useState(false);
    const [googleOpen, setGoogleOpen] = useState(false);
    const [amazonOpen, setAmazonOpen] = useState(false);
    const [appleOpen, setAppleOpen] = useState(false);
    const [googleLink, setGoogleLink] = useState(false);
    const [amazonLink, setAmazonLink] = useState(false);
    const [appleLink, setAppleLink] = useState(false);

    const handlePasswordClose = () => {
        setPasswordOpen(false);
    };
    const handlePasswordOpen = () => {
        setPasswordOpen(true);
    };

    const handlePaymentClose = () => {
        setPaymentOpen(false);
    };
    const handlePaymentOpen = () => {
        setPaymentOpen(true);
    };

    const handleGoogleClose = () => {
        setGoogleLink(!googleLink);
        setGoogleOpen(false);
    };
    const handleGoogleOpen = () => {
        setGoogleOpen(true);
    };

    const handleAmazonClose = () => {
        setAmazonink(!amazonLink);
        setAmazonOpen(false);
    };
    const handleAmazonOpen = () => {
        setAmazonOpen(true);
    };

    const handleAppleClose = () => {
        setAppleLink(!appleLink);
        setAppleOpen(false);
    };
    const handleAppleOpen = () => {
        setAppleOpen(true);
    };

    
    return (
        <div className="page-wrapper" id="outer-container">
        <Header/>
            <div className='user-container'>
                <table style={{width:'100%',height:'max-content',}}>
                    <tr>
                        <td style={{textAlign:'center'}}>
                            <div><img className='user-pfp-bigger' src={UserPFP}/></div>
                        </td>
                        <td>
                            <div  className='user-info-container'>
                                <div>
                                    <p ><span style={{fontSize:40, fontWeight:"bold",}}>Email: </span>
                                    <span style={{fontSize:35}}>example@mail.com</span> 
                                    </p>
                                </div>
                                
                                <div className='item-btn-align-container'>
                                    <button id='openModal' className='item-btn' type='button' onClick={handlePasswordOpen}>Edit Password</button>
                                </div>
                                
                                <Modal isOpen={passwordOpen} onClose={handlePasswordClose}>
                                    <button className='modal-icon-btn' type='button' onClick={handlePasswordClose}><img className="modal-close-icon" src={CloseIcon}/></button> <br/>
                                        <p>New Password:</p>
                                        <input class="login-regis-input" name="password" id="password" type="password" placeholder='Enter New Password'/>
                                        <p>Confirm Password:</p>
                                        <input class="login-regis-input" name="password" id="password" type="password" placeholder='Enter Confirm Password'/>
                                        <div style={{marginTop:'30px'}}>
                                        <button className='modal-buttons' type='button' onClick={handlePasswordClose}>Edit Password</button>
                                        <button className='modal-buttons' type='button' onClick={handlePasswordClose}>Cancel</button>
                                        </div>
                                </Modal>
                                
                            </div>

                            <div  className='user-info-container'>
                                <div>
                                    <p ><span style={{fontSize:40, fontWeight:"bold",}}>Card No.: </span>
                                    <span style={{fontSize:35}}>1234 **** ****</span> 
                                    </p>
                                </div>
                                
                                <div className='item-btn-align-container'>
                                    <button id='openModal' className='item-btn' type='button' onClick={handlePaymentOpen}>Edit Payment Details</button>
                                </div>
                                
                                <Modal isOpen={paymentOpen} onClose={handlePaymentClose}>
                                    <button className='modal-icon-btn' type='button' onClick={handlePaymentClose}><img className="modal-close-icon" src={CloseIcon}/></button> <br/>
                                        <p>New Card No.:</p>
                                        <input class="login-regis-input" name="cardNo" id="cardNo" type="number" placeholder='Enter Card No.'/>
                                        <p>Card Type:</p> 
                                        <select className='payment-selector'>
                                            <option value="credit"> Master/VISA </option>
                                            <option value="debit"> Debit Card </option>
                                        </select>
                                        <p>Bank Name:</p>
                                        <input class="login-regis-input" name="bankName" id="bankName" type="text" placeholder='Enter Bank Name'/>
                                        <div style={{marginTop:'30px'}}>
                                        <button style={{fontSize:'22px',}} className='modal-buttons' type='button' onClick={handlePaymentClose}>Edit Payment Details</button>
                                        <button className='modal-buttons' type='button' onClick={handlePaymentClose}>Cancel</button>
                                        </div>
                                </Modal>
                                
                            </div>
                        </td>
                    </tr>
                </table>
            </div>


            <div style={{top:'450px'}} className='category-container'>
                <h1 className='category-title'>Link Account</h1>

                <div class='item-container'>
                    <div>
                        <p style={{fontSize:25, fontWeight:"bold",}}>Google Book
                        </p>
                    </div>
                    
                    <div className='item-btn-align-container'>
                        <button id='openModal' className='item-btn' type='button' onClick={handleGoogleOpen}>Link Account</button>
                    </div>
                    
                    <Modal isOpen={googleOpen} onClose={handleGoogleClose}>
                        <button className='modal-icon-btn' type='button' onClick={handleGoogleClose}><img className="modal-close-icon" src={CloseIcon}/></button> <br/>
                        <h1 style={{textAlign:'center'}}>Account successfully linked!</h1>  
                        <div style={{textAlign:'center'}}>
                            <button className='modal-close-btn' type='button' onClick={handleGoogleClose}>Okay</button>
                        </div>
                    </Modal>
                </div>

                <div class='item-container'>
                    <div>
                        <p style={{fontSize:25, fontWeight:"bold",}}>Amazon
                        </p>
                    </div>
                    
                    <div className='item-btn-align-container'>
                        <button id='openModal' className='item-btn' type='button' onClick={handleAmazonOpen}>Link Account</button>
                    </div>
                    
                    <Modal isOpen={amazonOpen} onClose={handleAmazonClose}>
                        <button className='modal-icon-btn' type='button' onClick={handleAmazonClose}><img className="modal-close-icon" src={CloseIcon}/></button> <br/>
                        <h1 style={{textAlign:'center'}}>Account already linked!</h1>  
                        <div style={{textAlign:'center'}}>
                            <button className='modal-close-btn' type='button' onClick={handleAmazonClose}>Okay</button>
                        </div>
                    </Modal>
                    
                </div>

                <div class='item-container'>
                    <div>
                        <p style={{fontSize:25, fontWeight:"bold",}}>Apple Book
                        </p>
                    </div>
                    
                    <div className='item-btn-align-container'>
                        <button id='openModal' className='item-btn' type='button' onClick={handleAppleOpen}>Link Account</button>
                    </div>
                    
                    <Modal isOpen={appleOpen} onClose={handleAppleClose}>
                        <button className='modal-icon-btn' type='button' onClick={handleAppleClose}><img className="modal-close-icon" src={CloseIcon}/></button> <br/>
                        <h1 style={{textAlign:'center'}}>Account successfully linked!</h1>  
                        <div style={{textAlign:'center'}}>
                            <button className='modal-close-btn' type='button' onClick={handleAppleClose}>Okay</button>
                        </div>
                    </Modal>
                    
                </div>
                
            </div>
            

        </div>
    );
}

export default UserProfile;