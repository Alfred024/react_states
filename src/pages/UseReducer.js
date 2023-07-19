const reducerObject = (state) => ({
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
    'CHECK': {
        ...state,
        loading: true,
    },
});

const reducer = (state, action) =>{
    if(reducerObject(state)[action.type]){
        return reducerObject(state)[action.type];
    }else{
        state;
    }
}