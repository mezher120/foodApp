
const initialState = {
    searchcopy: [],
    detail: {},
    search: [],
    namefilter: ""
}

console.log(initialState, "a ver que pasa");

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "DESCENDENTE":
            console.log(action.payload, "descendente reducer");
            return {
                ...state, search: action.payload
            }
        case "FILTER":
            console.log(action.payload, "filter reducer");
            const copy = state.searchcopy;
            console.log(copy);
            const filtering = copy.filter(e => e.types.includes(action.payload));
            console.log(filtering);
            return {
                ...state, search: filtering
            }
        case "SEARCH":
            console.log(action.payload, "reducer search");
            return {
                ...state, search: action.payload.res, namefilter: action.payload.input.name, searchcopy: action.payload.res
            }
        case "ALL":
            const all = state.searchcopy;
            return {
                ...state, search: all
            }  
        case "GET_ALL_FIRST":
            return {
                ...state, search: action.payload
            }
            
        default:
            return {
                ...state
            };
    }
}