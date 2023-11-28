import { useNavigate } from 'react-router-dom';
import '../css/style.css';

function Register() {
const navigate = useNavigate();

  return (
    <div style={{height:915,}} className='page-wrapper'>
        <div className='login-regis-container'>
            <h1>Register for an Account</h1>

            <h3>Email:</h3>
            <input class="login-regis-input" name="email" id="email" type="email" placeholder='Enter Email'/>

            <h3>Password:</h3>
            <input class="login-regis-input" name="email" id="email" type="password" placeholder='Enter Password'/>

            <h3>Confirm Password:</h3>
            <input class="login-regis-input" name="email" id="email" type="password" placeholder='Enter Confirm Password'/>

            <br/><br/>
            <div className='button-container' onClick={() => navigate('/home')}>
                <button class="btn" style={{height:50, width:150,}}> Register</button>
            </div>
            

            <p className='login-regis-text'>Already have an account?</p>
            <p style={{marginTop:-20}} className='login-regis-text'><a href='/'>Login Here</a></p>
        </div>
    </div>
  );
}

export default Register;
