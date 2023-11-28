import { useNavigate } from 'react-router-dom'
import Header from '../../header.js';
import '../../css/style.css';
import Cover from '../../assets/java_graphical.jpg';
import UndoIcon from '../../assets/icons/undo_icon.png';
import PreviewIcon from '../../assets/icons/preview_icon.png';


function DetailJavaGraphical() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper" id="outer-container">
        <Header/>
        <div className='book-detail-container'>
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
                            <tr style={{ verticalAlign:'top'}}>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Description: </p></td>
                                <td className='book-detail-content-td'><p>The three books in the Java series aim to give the learner a deep understanding of the Standard Edition (SE) Application Programming Interface (API) of the Java programming language. The series begins with an introduction to the basic concepts of Java objects and concludes with an exploration of the development of Java programmes that employ a graphical user interface to the business logic of a Java application.</p></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

            <div style={{display:'flex', justifyContent:'flex-end',}}>
                <button className='item-btn' type='button' onClick={()=>navigate('/refundJavaGraphical')} ><img className='item-btn-icon' src={UndoIcon}/>Refund</button>
                <button style={{marginLeft:'15px'}} className='item-btn' type='button' onClick={()=>navigate('/readingJavaGraphical')} ><img className='item-btn-icon' src={PreviewIcon}/>Read</button>
            </div>
        </div>

        <div style={{top:"1250px", height:'500px'}} className='category-container'>
            <h1 className='category-title'>Other Editions</h1>
            <p style={{fontSize:'35px', textAlign:'center'}}>There is no other edition for this book...</p>
        </div>

        <div style={{top:"1800px", height:'500px'}} className='category-container'>
            <h1 className='category-title'>Other Languages</h1>
            <p style={{fontSize:'35px', textAlign:'center'}}>There is no other language edition for this book...</p>
        </div>
    </div>
  );
}

export default DetailJavaGraphical;
