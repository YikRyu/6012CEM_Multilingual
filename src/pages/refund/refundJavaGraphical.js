import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../header.js';
import Modal from '../../components/modals/modal';
import '../../css/style.css';
import Cover from '../../assets/java_graphical.jpg';
import CloseIcon from '../../assets/icons/close_icon.png';


function RefundJavaGraphical() {
  const navigate = useNavigate();
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
        <div style={{top:"70px"}} className='category-container'>
            <h1 className='category-title'>Submit Refund Request</h1>
            <div style={{position:'relative', left:'0px', marginBottom:'200px'}} className='book-detail-container'>
                <table style={{width:'100%',height:'max-content',}}>
                    <tr>
                        <td className='book-detail-cover-td' >
                            <div><img className='book-cover' src={Cover}/></div>
                            <p><span style={{fontWeight:'bold',textAlign:'center'}}>Price:</span><br/>RM 125.59</p>
                        </td>
                        <td>
                            <table className='book-detail-table'>
                                <tr>
                                    <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Title: </p></td>
                                    <td className='book-detail-content-td'><p>Java: Graphical User Interface</p></td>
                                </tr>
                                <tr>
                                    <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Author: </p></td>
                                    <td className='book-detail-content-td'><p>David Etheridge</p></td>
                                </tr>
                                <tr>
                                    <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Publisher: </p></td>
                                    <td className='book-detail-content-td'><p>Ventus Publishing ApS</p></td>
                                </tr>
                                <tr>
                                    <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Year: </p></td>
                                    <td className='book-detail-content-td'><p>2009</p></td>
                                </tr>
                                <tr>
                                    <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Language: </p></td>
                                    <td className='book-detail-content-td'><p>English</p></td>
                                </tr>
                                <tr>
                                    <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Edition: </p></td>
                                    <td className='book-detail-content-td'><p>N/A</p></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>

                <p style={{fontSize:'35px'}}>Refund Reason(s):</p>
                <textarea className='refund-input' placeholder='Enter your reasons...'></textarea>

                <div style={{display:'flex', justifyContent:'flex-end',}}>
                    <button className='item-btn' type='button' onClick={handleOpen}>Refund</button>
                </div>

                <Modal isOpen={open} onClose={handleClose}>
                    <button className='modal-icon-btn' type='button' onClick={handleClose}><img className="modal-close-icon" src={CloseIcon}/></button> <br/>


                    <h1 style={{textAlign:'center'}}>Refund request successful. We will notify you for the request result at most after 7 days.</h1>  

                    <div style={{textAlign:'center'}}>
                        <button className='modal-close-btn' type='button' onClick={handleClose}>Okay</button>
                    </div>
                </Modal>
            </div>
        </div>

        
    </div>
  );
}

export default RefundJavaGraphical;
