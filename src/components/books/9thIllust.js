import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Cover from '../../assets/java_9th_illust.jpg';
import OptionIcon from '../../assets/icons/option_icon.png';
import '../../css/style.css';

function NinthEdition() {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
  
   
    const MyOptions = [
      "Book Details",
      "Purchase",
      "Language/Edition",
    ];
  
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
  
        
    };
  
    const handleOption = (option) =>{
      switch(option){
        case 'Book Details':
          navigate('/detail9thIllust');
          break;
        
        case 'Purchase':
          navigate('/purchaseIllust');
          break;

        case 'Language/Edition':
          navigate('/detail9thIllust');
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
        <a href='/detail9thIllust'><img className='book-cover' src={Cover}/></a>
        <p className='book-title-author'>Introduction to J...<br/> <span style={{fontSize:'20px'}}>Y. Daniel Yang</span></p>
      </div>
    );
  }
  
  export default NinthEdition;
  