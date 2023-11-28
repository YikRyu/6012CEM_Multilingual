import { useNavigate } from 'react-router-dom'
import Header from '../../header.js';
import '../../css/style.css';
import Cover from '../../assets/java_9th_illust.jpg';
import PurchaseIcon from '../../assets/icons/purchase_icon.png';
import PreviewIcon from '../../assets/icons/preview_icon.png';
import FifthIllust from '../../components/books/5thIllust';
import CnEdition from '../../components/books/cnEdition';


function Detail9thIllust() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper" id="outer-container">
        <Header/>
        <div className='book-detail-container'>
            <table style={{width:'100%',height:'max-content',}}>
                <tr>
                    <td className='book-detail-cover-td' >
                        <div><img className='book-cover' src={Cover}/></div>
                        <p><span style={{fontWeight:'bold',textAlign:'center'}}>Price:</span><br/>RM 129.90</p>
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
                            <tr style={{ verticalAlign:'top'}}>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Description: </p></td>
                                <td className='book-detail-content-td'><p>"Introduction to Java Programming, Brief, 9e, " features comprehensive coverage ideal for a one-, two-, or three-semester CS1 course sequence.Daniel Liang teaches concepts of problem-solving and object-oriented programming using a fundamentals-first approach. Beginning programmers learn critical problem-solving techniques then move on to grasp the key concepts of object-oriented, GUI programming, advanced GUI and Web programming using Java.</p></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

            <div style={{display:'flex', justifyContent:'flex-end',}}>
                <button className='item-btn' type='button' onClick={()=>navigate('/purchase9thIllust')} ><img className='item-btn-icon' src={PurchaseIcon}/>Purchase</button>
                <button style={{marginLeft:'15px'}} className='item-btn' type='button' onClick={()=>navigate('/reading9thIllust')} ><img className='item-btn-icon' src={PreviewIcon}/>Preview</button>
            </div>
        </div>

        <div style={{top:"1390px"}} className='category-container'>
            <h1 className='category-title'>Other Editions</h1>
            <FifthIllust />
        </div>

        <div style={{top:"2090px"}} className='category-container'>
            <h1 className='category-title'>Other Languages</h1>
            <CnEdition/>
        </div>
    </div>
  );
}

export default Detail9thIllust;
