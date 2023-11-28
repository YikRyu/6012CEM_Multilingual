import { useNavigate } from 'react-router-dom'
import Header from '../../header.js';
import '../../css/style.css';
import Cover from '../../assets/java_5th_illust.jpg';
import UndoIcon from '../../assets/icons/undo_icon.png';
import PreviewIcon from '../../assets/icons/preview_icon.png';
import NinthIllust from '../../components/books/9thIllust';
import CnEdition from '../../components/books/cnEdition';


function Detail5thIllust() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper" id="outer-container">
        <Header/>
        <div className='book-detail-container'>
            <table style={{width:'100%',height:'max-content',}}>
                <tr>
                    <td className='book-detail-cover-td' >
                        <div><img className='book-cover' src={Cover}/></div>
                        <p><span style={{fontWeight:'bold',textAlign:'center'}}>Price:</span><br/>RM 95.59</p>
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
                                <td className='book-detail-content-td'><p>2005</p></td>
                            </tr>
                            <tr>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Language: </p></td>
                                <td className='book-detail-content-td'><p>English</p></td>
                            </tr>
                            <tr>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Edition: </p></td>
                                <td className='book-detail-content-td'><p>5th illustrated edition</p></td>
                            </tr>
                            <tr style={{ verticalAlign:'top'}}>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Description: </p></td>
                                <td className='book-detail-content-td'><p>Using a step-by-step approach that fosters self-teaching, Liang presents Java programming in four parts. The early chapters outline the conceptual basis for understanding Java. Subsequent chapters progressively present Java programming in detail, culminating with the development of comprehensive Java applications. Revised in every detail to enhance clarity, content, presentation, examples, and exercises. Updated to JSE 5.0 Features many new illustrations and short examples throughout to demonstrate concepts and techniques. Presents large examples in case studies with overall discussions and thorough line-by-line explanations. Expands treatment of Object-Oriented Programming and GUI Programming. Features excellent coverage of advanced topics in the new Comprehensive version, including: Exceptions, data structures, multithreading, JavaBeans, MVC, Containers, Advanced Swing, Database Programming, Servlets, JavaServer Pages, Networking, and Remote Method Invocation. Ideal tutorial/reference for programmers who want to learn more about Java.</p></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

            <div style={{display:'flex', justifyContent:'flex-end',}}>
                <button className='item-btn' type='button' onClick={()=>navigate('/refund5thIllust')} ><img className='item-btn-icon' src={UndoIcon}/>Refund</button>
                <button style={{marginLeft:'15px'}} className='item-btn' type='button' onClick={()=>navigate('/reading5thIllust')} ><img className='item-btn-icon' src={PreviewIcon}/>Read</button>
            </div>
        </div>

        <div style={{top:"1690px"}} className='category-container'>
            <h1 className='category-title'>Other Editions</h1>
            <NinthIllust />
        </div>

        <div style={{top:"2370px"}} className='category-container'>
            <h1 className='category-title'>Other Languages</h1>
            <CnEdition/>
        </div>
    </div>
  );
}

export default Detail5thIllust;
