import { COMPLETE, ADD, DELETE, EDIT } from "../constants/ActionsType";



const initialeState =[];
 

export default function Todo (state=initialeState,action) {
switch (action.type) {
    case ADD: 
        return [...state,action.id]
   
case COMPLETE:
    return state.map((el)=>el.id===action.payload?{...el, isComplete:!el.isComplete}:el)
    case DELETE:
        return state.filter(el=>el.id!==action.id)
        case EDIT:
            return state.map(el=>el.id===action.payload.id? {...el, text:action.payload.text, isComplete:false}:el)
    
    default: return state
        
}
}