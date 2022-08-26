import React from "react";
import { connect } from 'react-redux';
import store from "../redux/store/index"


class Resultado extends React.Component {

	render() {
		const { formulario, formulario2} = this.props
		return (
			<div>
				<h1>teste:{formulario.email}</h1>

				<h1>teste:{formulario.name}</h1>

				<h1>teste:{formulario2.endereco}</h1>

				<h1>teste:{formulario2.numero}</h1>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		formulario: state.reducerform1,
		formulario2: state.reducerform2
	}
}


export default connect(mapStateToProps)(Resultado)