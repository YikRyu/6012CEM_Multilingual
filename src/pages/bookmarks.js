//optin menu ref:https://www.geeksforgeeks.org/how-to-create-more-options-in-reactjs/

import { useNavigate } from 'react-router-dom';
import JavaGraphical from '../components/books/javaGraphical';
import Header from '../header.js';
import '../css/style.css';


function Bookmarks() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper" id="outer-container">
        <Header/>
        <div style={{top:"70px", height:'450px'}} className='category-container'>
            <h1 className='category-title'>Pick up from where you left over</h1>
            <div className='book-list-container'>
              <JavaGraphical/>
            </div>
        </div>
    </div>
  );
}

export default Bookmarks;
