import axios from "axios";

export const GETBIODATA = "GETBIODATA";
export const GETFAMILYDETAILS = "GETFAMILYDETAILS";
export const GETHOBBIES = "GETHOBBIES"

export const getDataSuccess = ()=>{
    return dispatch =>{
         axios.get('https://anapioficeandfire.com/api/characters/583')
        .then(({data})=> {
            console.log("action",data);
            dispatch({type: GETBIODATA, payload: data});   
          })
        .catch((error) => console.log(error));
    }
}

export const getFamilyDetails = ()=>
{
    return dispatch =>{
        axios.get('https://anapioficeandfire.com/api/characters/583')
        .then(({data})=> {
            console.log("action",data);
            dispatch({type: GETFAMILYDETAILS, payload: data});   
          })
        .catch((error) => console.log(error));
    }   
}

export const getHobbies = ()=>
{
    return dispatch =>{
        axios.get('https://anapioficeandfire.com/api/characters/583')
        .then(({data})=> {
            console.log("action",data);
            dispatch({type: GETHOBBIES, payload: data});   
          })
        .catch((error) => console.log(error));
    }   
}


