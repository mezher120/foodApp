import axios from "axios";

const initialState = {
    receta: [],
    detail: {}
}

export default async function reducer(state = initialState, action) {
    switch (action.type) {
        case "CREATE_RECIPE":
            try {
                const response = await axios.post('http://localhost:3001/create', action.payload);
                return {
                    ...state, receta: action.payload
                }
            } catch (error) {
                console.log(error);
            }
        case "GET_DETAIL":
            console.log(action.payload);
            return {
                ...state, detail: action.payload
            }

        case "DELETE_DETAIL":
            console.log(action.payload);
            return {
                ...state, detail: {}
            }
            
        default:
            return state;
    }
}