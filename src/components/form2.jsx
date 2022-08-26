import React from "react"
import { connect } from 'react-redux';
import { addForm2Action } from "../redux/actions/formActions";
class Form2 extends React.Component{
  constructor() {
    super();
    this.state = {
      endereco: '',
      numero: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
     })
   }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch , history} = this.props; 
    dispatch(addForm2Action(this.state))
    history.push('/resultado')
  }


  render() {
      const { numero, endereco } = this.state
      return (
          <form  onSubmit={this.handleSubmit}>
          <input value={endereco} onChange={this.handleChange} name="endereco" placeholder="endereço" type="text" />
          
              <input onChange={this.handleChange}  value={numero} name="numero"  placeholder="phone" type="phone" />
              <button type="submit" value="enviar">enviar</button>
     </form>
      )
    }
  }
  
  
export default connect()(Form2)
 