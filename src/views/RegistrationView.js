import { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import authOperations from '../redux/auth/auth-operations'

 class Registration extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }
  
  handleChange = ({ target: { name, value } }) => {
    this.setState({[name]: value})
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.onRegister(this.state)

    this.setState({ name: '', email: '', password:''})
  }

  render() {
    const {name, email, password} = this.state
    return (
      <div className='authContainer'>
        <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames='title'>
            <h1 className="title">Sing up</h1>
          </CSSTransition>
        <form autoComplete='off' onSubmit={this.handleSubmit} className='authForm'>
          <label>
            Name: <input type='text' name='name' value={name} onChange={this.handleChange}></input>
          </label>
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
onRegister: authOperations.register
}

export default connect(null, mapDispatchToProps)(Registration)