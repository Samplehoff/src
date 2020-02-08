const initialState = {
    value: 0,
    color: "#000000"
}

const reducer = (state = initialState, action) => {
    let { type, value } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1,
            color: state.color
            
        }
    }else if (type === "DECREMENT") {
        return {
            value: state.value - 1,
            color: state.color
        }
    }else if (type === "INCREMENT5") {
        return {
            value: state.value + 5,
            color: state.color
        }
    }else if (type === "DECREMENT5") {
        return {
            value: state.value - 5,
            color: state.color
        }
    
    }else if( type === "CHANGECOLOR") {
        return {
            value: state.value,
            color: value
        }
    }else if( type === "CHANGEVALUE") {
        return {
            value: state.value,
            color: value
        }
    }else if( type === "RESETVALUE") {
        return {
            value: value,
            color: state.color
        }
    }
    

    return state
}



    