import { Component } from 'react';
import './Signup.css';

class Signup extends Component {
    state = { username: "", password: "", gmail: "" }

    onSignIn = () => {
        const { changeToSignIn } = this.props
        changeToSignIn()
    }

    getUsername = (event) => {
        this.setState({ username: event.target.value })
    }

    getEmail = (event) => {
        this.setState({ gmail: event.target.value })
    }

    getPassword = (event) => {
        this.setState({ Password: event.target.value })
    }

    getForm = () => {
        this.preventDefault()
        this.setState({username : "",Password : "",gmail : ""})
        console.log("checked...");
    }

    render() {
        const { username, Password, gmail } = this.state
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
                    <h1>Sign up</h1>
                    <p>Already have an account? <span className='sign-in-anchor' onClick={this.onSignIn}>Sign In</span></p>
                    <form onSubmit={this.getForm}>
                        <div>
                            <label>Full name <span className='asteric'>*</span></label><br />
                            <input type='text' required onChange={this.getUsername} value={username} />
                        </div>
                        <div>
                            <label>Email address <span className='asteric'>*</span></label><br />
                            <input type='email' required onChange={this.getEmail} value={gmail} />
                        </div>
                        <div>
                            <label>Password <span className='asteric'>*</span></label><br />
                            <input type='password' required onChange={this.getPassword} value={Password} />
                        </div>
                        <div>
                            <label>Company</label><br />
                            <input type='text' />
                        </div>
                        <div>
                            <input type="checkbox" />
                            <span>I agree to the <span className='sign-in-anchor'>Terms Of Service</span> and <span className='sign-in-anchor'>Privacy Polacy</span></span>
                        </div>
                        <button type="submit">Create Your free Account</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup