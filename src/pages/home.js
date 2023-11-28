import { useNavigate } from 'react-router-dom'
import '../css/style.css';
import Header from '../header.js';
import JavaGraphical from '../components/books/javaGraphical';
import FifthIllust from '../components/books/5thIllust';
import NinthIllust from '../components/books/9thIllust';
import CnEdition from '../components/books/cnEdition';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper" id="outer-container">
    <Header/>
      <div style={{top:"70px"}} className='category-container'>
          <h1 className='category-title'>Your Books</h1>
          <div className='book-list-container'>
            
            <JavaGraphical/>
            <FifthIllust />
            
          </div>
      </div>

      <div style={{top:"700px"}} className='category-container'>
          <h1 className='category-title'>Other Books You Might Like</h1>
          <div className='book-list-container'>
            
            <CnEdition/>
            <NinthIllust />
            
          </div>
      </div>
    </div>
  );
}

export default Home;
