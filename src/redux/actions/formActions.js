export const ADD_FORM1 = 'ADD_FORM1'
export const ADD_FORM2 = 'ADD_FORM2'

export function addFormAction (payload) {
    return {
        type: ADD_FORM1,
        payload,
  }
}
  
export const addForm2Action = (payload) => {
    return {
        type: ADD_FORM2,
        payload,
   } 
}