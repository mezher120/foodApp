import axios from "axios";

export function createRecipe(info) {
    return { type:"CREATE_RECIPE", payload: info}
}

export function getDetail(id) {
    return function (dispatch) {
        return axios(`http://localhost:3001/recipes/${id}`)
            .then(r => r.data)
            .then(res => dispatch({type: "GET_DETAIL", payload: res}))
            .catch(error => console.log(error))
    }
}

export function deleteDetail() {
    console.log("actions borrardetail")
    return { type: "DELETE_DETAIL"}
}