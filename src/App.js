import { Component } from 'react'
import Signup from '../src/components/SignUp/Signup'
import Signin from '../src/components/SignIn/Signin'
import './App.css'

class App extends Component {
    state = { isAccount: false }

    changeToSignIn = () => {
        this.setState((prevState) => ({
            isAccount: !prevState.isAccount
        }))
    }

    changeToSignUp = () => {
        this.setState((prevState) => ({
            isAccount: !prevState.isAccount
        }))
    }
    render() {
        const {isAccount} = this.state
        return (
            <div>
                {isAccount && <Signin changeToSignUp={this.changeToSignUp} />}
                {!isAccount && <Signup changeToSignIn={this.changeToSignIn} />}
            </div>
        )
    }
}

export default App;