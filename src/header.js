import { useNavigate } from 'react-router-dom'
import SearchIcon from './assets/icons/search_icon.png';
import Sidebar from './sidenav.js';
import './sidenav.css';
import './css/style.css';

function Header(){
    const navigate = useNavigate();

    return(
        <div className='header'>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <h1 className='header-title'>Multilingual</h1>
        <form onSubmit={() => navigate('/search')}>
            <div className='search-container'>
                <img className='search-icon' src={SearchIcon}/>
                <input className='search-input-container' type="text" name="search" id="search" placeholder='Enter book name to search...'/>
                <button className='search-submit-btn' type="submit"></button>
            </div>
        </form>
        </div>
    );

    
}

export default Header;