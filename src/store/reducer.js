import * as actionTypes from './action'

const reducer = (state=[],action)=>
{
    switch(action.type)
    {
        case actionTypes.GETBIODATA :
            return {
               state: action.payload
            }
        case actionTypes.GETFAMILYDETAILS:
            return {
                state: action.payload
             }
        case actionTypes.getHobbies:
                return {
                    state: action.payload
                 }
            default :
         return state;
    }
}

export default reducer