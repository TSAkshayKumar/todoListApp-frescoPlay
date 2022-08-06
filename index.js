//Write actions for

//--Adding a task
//--Marking a task as complete
//--Filtering tasks

    export const ADD_TODO = "ADD_TODO";
     export const TOGGLE_TODO = "TOGGLE_TODO";


export const addTodo = text => ({
    type : ADD_TODO,
    id : 0,
    text:text,
})  

export const setVisibilityFilter = filter => ({
       type : "SET_VISIBILITY_FILTER",
       filter : filter,
    
})

export const toggleTodo = id => ({
    type : TOGGLE_TODO,
    id : id
  
})

export const VisibilityFilters = {
    SHOW_ALL : 'all',
    SHOW_COMPLETED : 'completed',
    SHOW_ACTIVE: 'incompleted',
}
