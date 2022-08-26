const INITIAL_STATE = {
  endereco: '',
  numero:'',
};

function reducerform2 (state = INITIAL_STATE, action) {
switch (action.type) {
  case 'ADD_FORM2': return { ...state, ...action.payload };
  default: return state
}
}



export default reducerform2;