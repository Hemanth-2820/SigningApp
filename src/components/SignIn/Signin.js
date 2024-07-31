import { Component } from 'react';
import './Signin.css';

class Signin extends Component {

    onSignUp = () => {
        const {changeToSignUp} = this.props
        changeToSignUp();
       }

    render() {
        return (
            <div className='bg-container'>
                <div className='left-container'>
                    <div className='left-container-matter'>
                        <h1>Welcome to our community</h1>
                        <p>Fuse helps developers to build organized
                            and well coded dashboards full of beautiful
                            and rich modules. Join us and start building
                            your application today.</p>
                        <p>More than 17k people joined us, it's your turn</p>
                    </div>
                </div>
                <div className='right-container'>
                    <h1>Sign in</h1>
                    <p>Don't have an account? <span className='sign-in-anchor' onClick={this.onSignUp}>Sign Up</span></p>
                    <form>
                        <div>
                            <label>Email address <span className='asteric'>*</span></label><br />
                            <input type='email' required />
                        </div>
                        <div>
                            <label>Password <span className='asteric'>*</span></label><br />
                            <input type='password' required />
                        </div>
                        <button type="submit">SignIn</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signin