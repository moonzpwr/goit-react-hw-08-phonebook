import { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import authOperations from '../redux/auth/auth-operations';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  
  handleChange = ({ target: { name, value } }) => {
    this.setState({[name]: value})
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.onLogin(this.state)

    this.setState({ name: '', email: '', password:''})
  }

  render() {
    const {email, password} = this.state
    return (
      <div className='authContainer'>
        <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames='title'>
            <h1 className="title">Sing in</h1>
          </CSSTransition>
        <form autoComplete='off' onSubmit={this.handleSubmit} className='authForm'>
          <label>
            E-mail: <input type='email' name='email' value={email} onChange={this.handleChange}></input>
          </label>
          <label>
            Password: <input type='password' name='password' value={password} onChange={this.handleChange}></input>
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
onLogin: authOperations.logIn
}

export default connect(null, mapDispatchToProps)(Login)