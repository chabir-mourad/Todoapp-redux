import {EDIT,COMPLETE,DELETE,ADD} from '../constants/ActionsType'


export const edit =(payload)=> {
    return {type:EDIT,payload}
}
export const complete =(payload)=>{
    return {type:COMPLETE,payload}
};
export const remove =(id)=> {
    return {type:DELETE, id}
}
export const add =(id)=> {
    return {type:ADD,id}
}