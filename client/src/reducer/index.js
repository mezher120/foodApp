
const initialState = {
    receta: [],
    detail: {},
    search: [],
    filter: []
}

console.log(initialState, "a ver que pasa");

export default function reducer(state = initialState, action) {
    switch (action.type) {
    //     case "CREATE_RECIPE":
    //         try {
    //             const response = await axios.post('http://localhost:3001/create', action.payload);
    //             return {
    //                 ...state, receta: action.payload
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }
        // case "GET_DETAIL":
        //     console.log(action.payload);
        //     return {
        //         ...state, detail: action.payload
        //     }

    //     case "DELETE_DETAIL":
    //         console.log(action.payload);
    //         return {
    //             ...state, detail: {}
    //         }

        case "ASCENDENTE":
            console.log(action.payload, "ascendente reducer");
            return {
                ...state, search: action.payload
            }
        case "DESCENDENTE":
            console.log(action.payload, "descendente reducer");
            return {
                ...state, search: action.payload
            }
        case "FILTER":
            console.log(action.payload, "filter reducer");
            return {
                ...state, filter: action.payload
            }
        case "SEARCH":
            console.log(action.payload, "reducer search");
            return {
                ...state, search: action.payload
            }
            
        default:
            return {
                ...state
            };
    }
}