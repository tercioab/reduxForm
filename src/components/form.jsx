import React from "react";
import { connect } from 'react-redux';
import { addFormAction } from "../redux/actions/formActions";



class Form1 extends React.Component{
	constructor() {
		super();
		this.state = {
      name: "",
      email:"",
    };
	}

  
  handleChange = ({target}) => {
    const { name, value } = target
    this.setState({
      [name]: value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch , history} = this.props; 
    dispatch(addFormAction(this.state))
    history.push('/2')
  

  }

  render() {
    const { name, email } = this.state;
    return (
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={email}  name="email" placeholder="email" type="email" />
            <input onChange={this.handleChange} value={name} name="name"  placeholder="name" type="text" />
            <button type="submit" value="enviar"> enviar </button>
   </form>
    )
  }
}

export default connect()(Form1)