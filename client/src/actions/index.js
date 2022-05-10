import axios from "axios";

// export function createRecipe(info) {
//     try {
//         axios.post('http://localhost:3001/recipe/', info)
//         .then(res => console.log(res));
//     } catch (error) {
//         console.log(error);
//     }
// }

// export function getDetail(id) {
//     return function (dispatch) {
//         return axios(`http://localhost:3001/recipes/${id}`)
//             .then(r => r.data)
//             .then(res => dispatch({type: "GET_DETAIL", payload: res}))
//             .catch(error => console.log(error))
//     }
// }

export function deleteDetail() {
    console.log("actions borrardetail")
    return { type: "DELETE_DETAIL"}
}

// export function ordenAscendente(info) {
//     console.log("actions ascendente")
//     return { type: "ASCENDENTE", payload: info}
// }
export const ordenAscendente = (info) => (dispatch) => {
    console.log("actions ascendente")
    dispatch({ type: "ASCENDENTE", payload: info})
}

export function ordenDescendente(info) {
    console.log("actions descendente")
    return { type: "DESCENDENTE", payload: info}
}

export function filter1(info) {
    console.log("filter")
    return { type: "FILTER", payload: info}
}

export function all() {
    return { type: "ALL"}
}

export function filtering(name, filter) {
    console.log(name, filter, "actions filtering")
    return function (dispatch) {
        return axios(`http://localhost:3001/recipes/filter?name=${name}&filter=${filter}`)
            .then(r => r.data)
            .then(res => dispatch({type: "FILTER", payload: res}))
            .catch(error => console.log(error))
    }
}


export function searching(input) {
    return function (dispatch) {
        return axios(`http://localhost:3001/recipes?name=${input.name}`)
            .then(r => r.data)
            .then(res => dispatch({type: "SEARCH", payload: {res, input}}))
            .catch(error => console.log(error))
    }
}