import { useNavigate } from 'react-router-dom'
import '../css/style.css';
import Header from '../header.js';
import JavaGraphical from '../components/books/javaGraphical';
import FifthIllust from '../components/books/5thIllust';

function MyBooks() {
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
    </div>
  );
}

export default MyBooks;
