import {ADD_FAV,FILTER,ORDER,REMOVE_FAV} from './actions'

export const initialState = {
    favorite:[],
    allCharacters:[],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAV:
        return{ ...state, allCharacters: state.favorite,favorite:[...state.favorite, action.payload]}
      case REMOVE_FAV:
        return {
          ...state,
          favorite: state.favorite.filter((fav) => fav.id !== action.payload),
        }
        case FILTER:
          const filtrado = state.allCharacters.filter((genero)=>genero.gender === action.payload)
          return{
            ...state,
            favorite:filtrado
          }
          case ORDER:
            const elementosOrdenados = [...state.allCharacters].sort((a,b)=>{
              if(action.payload === "A"){
                return a.id-b.id
              }
              else if(action.payload === "D"){
                return b.id-a.id
              }
            })
            return{
              ...state,
              favorite:elementosOrdenados
            }
      default:
        return state;
    }
  };