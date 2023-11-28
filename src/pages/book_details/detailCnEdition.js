import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../header.js';
import '../../css/style.css';
import Cover from '../../assets/java_cn.png';
import PurchaseIcon from '../../assets/icons/purchase_icon.png';
import PreviewIcon from '../../assets/icons/preview_icon.png';
import FifthIllust from '../../components/books/5thIllust';
import NinthIllust from '../../components/books/9thIllust';
import Modal from '../../components/modals/modal';
import CloseIcon from '../../assets/icons/close_icon.png';


function DetailCnEdition() {
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
        <div className='book-detail-container'>
            <table style={{width:'100%',height:'max-content',}}>
                <tr>
                    <td className='book-detail-cover-td' >
                        <div><img className='book-cover' src={Cover}/></div>
                        <p><span style={{fontWeight:'bold',textAlign:'center'}}>Price:</span><br/>RM 78.90</p>
                    </td>
                    <td>
                        <table className='book-detail-table'>
                            <tr>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Title: </p></td>
                                <td className='book-detail-content-td'><p>Java语言程序设计</p></td>
                            </tr>
                            <tr>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Author: </p></td>
                                <td className='book-detail-content-td'><p>丁振凡、范萍</p></td>
                            </tr>
                            <tr>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Publisher: </p></td>
                                <td className='book-detail-content-td'><p>清华大学出版社</p></td>
                            </tr>
                            <tr>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Year: </p></td>
                                <td className='book-detail-content-td'><p>2022</p></td>
                            </tr>
                            <tr>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Language: </p></td>
                                <td className='book-detail-content-td'><p>Chinese</p></td>
                            </tr>
                            <tr>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Edition: </p></td>
                                <td className='book-detail-content-td'><p>第三版</p></td>
                            </tr>
                            <tr style={{ verticalAlign:'top'}}>
                                <td className='book-detail-title-td'><p style={{fontWeight:'bold'}}>Description: </p></td>
                                <td className='book-detail-content-td'><p>《Java语言程序设计(第3版)》从初学者角度出发, 用通俗易懂的语言、丰富多彩的案例讲述了Java语言的理论知识和编程方法, 内容覆盖全国计算机等级考试二级Java语言程序设计的大纲要求, 同时融入了新版JDK的特色知识。全书分18章, 内容分别是Java语言概述, 数据类型与表达式, 流程控制语句，数组与方法，类与对象, 继承与多态, 常用数据类型处理类, 抽象类、接口与内嵌类, 异常处理, Java绘图, 图形用户界面编程基础, 流式输入/输出与文件处理、Java泛型与收集API, Lambda表达式、Stream与枚举类型, 多线程, 高级图形界面编程, JDBC技术与数据库应用, Java的网络编程。读者可以跟随本书的讲解, 边学边练, 设计出功能较强的中小型应用程序。</p></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

            <div style={{display:'flex', justifyContent:'flex-end',}}>
                <button className='item-btn' type='button' onClick={()=>navigate('/purchaseCnEdition')} ><img className='item-btn-icon' src={PurchaseIcon}/>Purchase</button>
                <button style={{marginLeft:'15px'}} className='item-btn' type='button' onClick={handleOpen} ><img className='item-btn-icon' src={PreviewIcon}/>Preview</button>
            </div>

            <Modal isOpen={open} onClose={handleClose}>
                <button className='modal-icon-btn' type='button' onClick={handleClose}><img className="modal-close-icon" src={CloseIcon}/></button> <br/>


                <h1 style={{textAlign:'center'}}>No preview available for this book...</h1>  

                <div style={{textAlign:'center'}}>
                    <button className='modal-close-btn' type='button' onClick={handleClose}>Okay</button>
                </div>
            </Modal>
        </div>

        <div style={{top:"1420px"}} className='category-container'>
        <h1 className='category-title'>Other Edition</h1>
            <div className='book-list-container'>
                <FifthIllust />
                <NinthIllust/>
            </div>
        </div>

        <div style={{top:"2080px", height:'500px'}} className='category-container'>
            <h1 className='category-title'>Other Languages</h1>
            <p style={{fontSize:'35px', textAlign:'center'}}>There is no other language edition for this book...</p>
        </div>
    </div>
  );
}

export default DetailCnEdition;
