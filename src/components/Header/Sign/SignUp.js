import { useNavigate } from 'react-router-dom';
import './Signup.css';


function Signup(props) {
    let loginto = useNavigate();
    const SingupHandler=()=>{
        loginto('/login')
    }
    return (<>
        <div className='signupContainer'>
            <div className='signTotal'>
                <img src={props.image} width={0} height={0}></img>
                <form className="signForm">

                    <h1>Sign Up</h1>
                    <label for='signText'>Username</label><input id='signText' type='text'></input>
                    <label for='signText1'>Email</label><input id='signText1' type='text'></input>
                    <label for='signNum'>Mobile Number</label><input id='signNum' type='number'></input>
                    <label for='signNum'>OTP</label><input id='OTPNum' type='number'></input>
                    <label for='signPass'>Password</label><input id='signPass' type='password'></input>
                    <label for='signCon'>Confirm Password</label><input id='signCon' type='password'></input>
                    <input id='signCheck' type='checkbox'></input><label for='signCheck' className='checkLabel'>I agree to the <b>Terms of User</b></label>
                    <div>
                        <button onClick={SingupHandler}>Signup</button><p>Have already an account ?</p><button onClick={SingupHandler }>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </>);
};
export default Signup;