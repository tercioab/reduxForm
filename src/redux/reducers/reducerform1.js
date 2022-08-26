import { ADD_FORM1 } from "../actions/formActions";


const INITIAL_STATE = {
    name: '',
    email:'',
};

function reducerform1  (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_FORM1 : return { ...state, ...action.payload }
    default: return state;
 }
}



export default reducerform1;