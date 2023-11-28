import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';
import Modal from '../components/modals/modal';
import Header from '../header.js';
import CloseIcon from '../assets/icons/close_icon.png';

function RefundRequests() {
    const navigate = useNavigate();
    var [cancelRefund, setCancelRefund] = useState(false);

    const [open, setOpen] = useState(false);
    const [openConfirmation, setConfirmationOpen] = useState(false);
 
    const handleClose = () => {
        setCancelRefund(cancelRefund = true);
        setOpen(false);
    };
    const handleOpen = () => {
        setConfirmationOpen(false);
        setOpen(true);
    };
 
    const handleConfirmationClose = () => {
        setConfirmationOpen(false);
    };
    const handleConfirmtionOpen = () => {
        setConfirmationOpen(true);
    };

    return (
        <div  className="page-wrapper" id="outer-container">
        <Header/>
            <div style={{top:"70px",}} className='category-container'>
                <h1 className='category-title'>Refund Requests</h1>

                { cancelRefund ? (
                    <div></div>
                ) : (
                    <div class='item-container'>
                    <div>
                        <p ><span style={{fontSize:25, fontWeight:"bold",}}>Java: Graphical User Interface</span> <br/>
                        <span style={{fontWeight:'bold'}}>David Etheridge</span> <br/>
                        <span style={{color:'grey',}}>N/A</span>
                        </p>
                    </div>

                    <div style={{display:'flex',}}>
                        <div className='item-btn-align-container'>
                            <button id='openModal' className='item-btn' type='button' onClick={() => navigate('/detailJavaGraphical')}>Book Details</button>
                        </div>
                        <div className='item-btn-align-container'>
                            <button id='openModal' className='item-btn' type='button' onClick={handleConfirmtionOpen}>Cancel Refund</button>
                        </div>
                    </div>

                    <Modal isOpen={openConfirmation} onClose={handleConfirmationClose}>
                        <button className='modal-icon-btn' type='button' onClick={handleConfirmationClose}><img className="modal-close-icon" src={CloseIcon}/></button> <br/>


                        <h1 style={{textAlign:'center'}}>Are you sure you want to cancel the refund request?</h1>  

                        <div style={{display:'flex', justifyContent:'flex-end'}}>
                            <button style={{marginLeft:'10px'}} className='modal-close-btn' type='button' onClick={handleOpen}>Confirm</button>
                            <button style={{marginLeft:'10px'}} className='modal-close-btn' type='button' onClick={handleConfirmationClose}>Cancel</button>
                        </div>
                    </Modal>
                    


                    
                    <Modal isOpen={open} onClose={handleClose}>
                        <button className='modal-icon-btn' type='button' onClick={handleClose}><img className="modal-close-icon" src={CloseIcon}/></button> <br/>


                        <h1 style={{textAlign:'center'}}>Refund request cancel successful!</h1>  

                        <div style={{textAlign:'center'}}>
                            <button className='modal-close-btn' type='button' onClick={handleClose}>Okay</button>
                        </div>
                    </Modal>
                    
                </div>
                )}
                
            </div>
        </div>
    );
}

export default RefundRequests;