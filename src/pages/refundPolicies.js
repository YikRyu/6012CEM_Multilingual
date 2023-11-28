import { useState } from 'react';
import '../css/style.css';
import Header from '../header.js';
import Modal from '../components/modals/modal';
import CloseIcon from '../assets/icons/close_icon.png';

function RefundPolicies() {
    const [open, setOpen] = useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

  return (
    <div className="page-wrapper" id="outer-container">
      <Header/>

        <div style={{top:"70px",}} className='category-container'>
            <h1 style={{textAlign:"center",}} className='category-title'>Refund Policies</h1>
            
            <div className='refund-policy-container'>
                <p>
                <b>Thank you for purchasing at Multilingual!</b> <br/>
                We offer refund within the 2 weeks (14 days) of your purchase, if 2 weeks have passed since your purchase, you will not be offered refund of any kind. <br/><br/>

                <b>Eligibility for Refunds and Exchanges</b> <br/>
                <ul>
                    <li>Provide your reasons for refund, we will review and decide for the refund results.</li>
                    <li>Refundable money may vary depends on the length of purchase date.</li>
                </ul> <br/>

                We will also notify you of the approval or rejection of your refund.  <br/><br/>

                If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days. You may also cancel the refund request before we do so. <br/><br/>

                <b>Late or missing refunds</b><br/>
                <ul>
                    <li>If you have not received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted.</li>
                    <li>If you have done all of this and you still have not received your refund yet, please contact us at <b>multilingual@multilingual.com</b> or <b>+601234567</b>.</li>
                </ul>
                </p>
            </div>
        </div>

        <div style={{top:"1050px",}} className='category-container'>
            <h1 style={{textAlign:"center",}} className='category-title'>Anymore Questions?</h1>
            
            <p style={{textAlign:'center'}}> Read the Q&A here!</p>
            <div style={{textAlign:'center', width:'100%'}}>
            <button style={{margin:'auto'}} class="item-btn" type='button' onClick={handleOpen}>Q&A</button>
                

            <Modal isOpen={open} onClose={handleClose}>
                <button className='modal-icon-btn' type='button' onClick={handleClose}><img className="modal-close-icon" src={CloseIcon}/></button> <br/>

                <h1>Q&A</h1>

                <p><span style={{fontWeight:'bold'}}>Question : Example Question 1 </span><br/>
                Example Answer 1</p>  

                <p><span style={{fontWeight:'bold'}}>Question : Example Question 2 </span><br/>
                Example Answer 2</p>  

                <div style={{textAlign:'center'}}>
                    <button className='modal-close-btn' type='button' onClick={handleClose}>Okay</button>
                </div>
            </Modal>
            </div>
        </div>
    </div>
  );
}

export default RefundPolicies;
