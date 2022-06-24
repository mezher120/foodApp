import axios from "axios";

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
        return axios(`/recipes/filter?name=${name}&filter=${filter}`)
            .then(r => r.data)
            .then(res => dispatch({type: "FILTER", payload: res}))
            .catch(error => console.log(error))
    }
}


export function searching(input) {
    return function (dispatch) {
        return axios(`/recipes?name=${input.name}`)
            .then(r => r.data)
            .then(res => dispatch({type: "SEARCH", payload: {res, input}}))
            .catch(error => console.log(error))
    }
}