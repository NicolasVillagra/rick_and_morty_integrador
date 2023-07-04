import {ADD_FAV,REMOVE_FAV} from './actions'

const initialState = {
    myFavorites:[]
}

export default function reducer (state = initialState,action){
    switch (action.type) {
        case ADD_FAV:
            return{
                ...state,
                myFavorites:action.payload
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites:parseInt(action.payload)
            }
    
        default:
            return {...state}
    }
}