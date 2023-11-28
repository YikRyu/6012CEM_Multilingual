import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../header.js';
import Modal from '../../components/modals/modal';
import '../../css/style.css';
import Cover from '../../assets/java_9th_illust.jpg';
import CloseIcon from '../../assets/icons/close_icon.png';
import PurchaseIcon from '../../assets/icons/purchase_icon.png';


function Purchase9thIllust() {
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
        <div style={{position:'relative', left:'0px', marginBottom:'200px'}} className='book-detail-container'>
            <table style={{width:'100%',height:'max-content',}}>
                <tr>
                    <td className='book-detail-cover-td' >
                        <div><img className='book-cover' src={Cover}/></div>
                    </td>
                    <td>
                        <table className='book-detail-table'>
                            <tr>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Title: </p></td>
                                <td className='book-detail-content-td'><p>Introduction to Java Programming - Comprehensive Version</p></td>
                            </tr>
                            <tr>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Author: </p></td>
                                <td className='book-detail-content-td'><p>Y. Daniel Yang</p></td>
                            </tr>
                            <tr>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Publisher: </p></td>
                                <td className='book-detail-content-td'><p>Pearson Prentice Hall</p></td>
                            </tr>
                            <tr>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Year: </p></td>
                                <td className='book-detail-content-td'><p>2013</p></td>
                            </tr>
                            <tr>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Language: </p></td>
                                <td className='book-detail-content-td'><p>English</p></td>
                            </tr>
                            <tr>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Edition: </p></td>
                                <td className='book-detail-content-td'><p>9th illustrated edition</p></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>

        <div style={{top:"850px"}} className='category-container'>
            <h1 className='category-title'>Payment Confirmation</h1>

            <div style={{position:'relative', left:'0px', backgroundColor:'transparent'}} className='book-detail-container'>
                <table style={{width:'100%',height:'max-content',}}>
                    <tr>
                        <td>
                            <table className='book-detail-table'>
                                <tr>
                                    <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Card No.: </p></td>
                                    <td className='book-detail-content-td'><p>1234 **** ****</p></td>
                                </tr>
                                <tr>
                                    <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Card Type: </p></td>
                                    <td className='book-detail-content-td'><p>VISA/Master</p></td>
                                </tr>
                                <tr>
                                    <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Bank Name: </p></td>
                                    <td className='book-detail-content-td'><p>CIMB</p></td>
                                </tr>
                                <tr>
                                    <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Payment Price: </p></td>
                                    <td className='book-detail-content-td'><p>RM 129. 90</p></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>

            <div style={{display:'flex', justifyContent:'flex-end', marginBottom:'120px'}}>
                <button className='item-btn' type='button' onClick={handleOpen} ><img className='item-btn-icon' src={PurchaseIcon}/>Confirm Payment</button>
            </div>


            <Modal isOpen={open} onClose={'/detail9thIllust'}>
                <button className='modal-icon-btn' type='button' onClick={'/detail9thIllust'}><img className="modal-close-icon" src={CloseIcon}/></button> <br/>

                <h1 style={{textAlign:'center'}}>Purchase successful! <br/> Redirecting to previous page...</h1>  

                <div style={{textAlign:'center'}}>
                    <button className='modal-close-btn' type='button' onClick={()=>navigate('/detail9thIllust')}>Okay</button>
                </div>
            </Modal>

        </div>

        

        

        
    </div>
  );
}

export default Purchase9thIllust;
