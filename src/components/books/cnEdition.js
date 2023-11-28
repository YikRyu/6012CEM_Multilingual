import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Cover from '../../assets/java_cn.png';
import OptionIcon from '../../assets/icons/option_icon.png';
import '../../css/style.css';

function CnEdition() {
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
          navigate('/detailCnEdition');
          break;
        
        case 'Purchase':
          navigate('/refundCnEdition');
          break;

        case 'Language/Edition':
          navigate('/detailCnEdition');
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
        <a href='/detailCnEdition'><img className='book-cover' src={Cover}/></a>
        <p className='book-title-author'>Java语言程序...<br/> <span style={{fontSize:'20px'}}>丁振凡、范萍</span></p>
      </div>
    );
  }
  
  export default CnEdition;
  