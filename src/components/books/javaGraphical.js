import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Cover from '../../assets/java_graphical.jpg';
import OptionIcon from '../../assets/icons/option_icon.png';
import '../../css/style.css';

function JavaGraphical() {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
  
   
    const MyOptions = [
      "Book Details",
      "Refund",
      "Language/Edition",
      "Read"
    ];
  
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
  
        
    };
  
    const handleOption = (option) =>{
      switch(option){
        case 'Book Details':
          navigate('/detailJavaGraphical');
          break;
        
        case 'Refund':
          navigate('/refundJavaGraphical');
          break;

        case 'Language/Edition':
          navigate('/detailJavaGraphical');
          break;

        case 'Read':
          navigate('/readingJavaGraphical');
          break;
      }
  
      setAnchorEl(null);
    }
  
    const open = Boolean(anchorEl);
  
    const handleClose = () => {
        setAnchorEl(null);
    };
   
  
    return (
        <div className='book-container'>
        <button className='book-option-btn' type='button' onClick={handleClick}><img className='option-icon' src={OptionIcon}/></button>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          onClose={handleClose}
          open={open}
          >
          {MyOptions.map((option) => (
              <MenuItem
                  key={option}
                  onClick={()=>handleOption(option)}
              >
                  {option}
              </MenuItem>
          ))}
          </Menu>
        <a href='/detailJavaGraphical'><img className='book-cover' src={Cover}/></a>
        <p className='book-title-author'>Java: Graphical U...<br/> <span style={{fontSize:'20px'}}>David Etheridge</span></p>
      </div>
    );
  }
  
  export default JavaGraphical;
  