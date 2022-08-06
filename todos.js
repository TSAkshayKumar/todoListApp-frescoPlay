import {ADD_TODO,TOGGLE_TODO} from '../actions/index'
const todos = (state = [], action) => {

     switch (action.type) {
    case ADD_TODO : 
      const id = action.id;
      const data = action.text;
      return {
        state: [
          ...state,
          {
            id : id + state.lenght,
            task: data,
            completed : false,
          }
        ]
      }

    case TOGGLE_TODO: 
        const newList = state.map((listitems) => {
            {
              return listitems.id !== action.selectedId ? listitems : {...listitems , completed: !listitems.completed};
            
        }})
        return {
            state :  newList,
        }

    default: return state;
      }
   
  }
  
  export default todos
