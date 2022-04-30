import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";


export default function Recetas(props) {
    // console.log(props);
    let id = props.match.params.id;

    // let detail = useSelector(state => state.detail);
    // let dispatch = useDispatch; 
    let [detail, setDetail] = React.useState({});

    React.useEffect(() => {
        async function getDetail(id) {
            try {
                const resp = await axios.get(`http://localhost:3001/recipes/${id}`)
                const data = resp.data;
                setDetail(data);
                return;
            } catch (error) {
                console.log(error);
                return;
            }
        }
        getDetail(id);
        console.log(detail, "bueno bueno");
    },[]);
    
    // dispatch(getDetail(params))
    // return () => {
    //     dispatch(deleteDetail())
    // }
    console.log(detail, "que bueno esto");
    
    // let [detail, setDetail] = React.useState("");
    

    return (
        <div> 
            <div>Titulo: {detail.title}</div>
            <div><img src={detail.image} alt="not found"></img></div>
            <div>Summary:</div>
            <div dangerouslySetInnerHTML={{__html: detail.summary}}></div>
            <div>
            <div>{detail.vegetarian ? <div>Si vegetarian</div> : null}</div>
            <div>{detail.vegan ? <div>Si vegetarian</div> : null}</div>
            <div>{detail.glutenFree ? <div>Si vegetarian</div> : null}</div>
            <div>{detail.dairyFree ? <div>Si vegetarian</div> : null}</div>
            <div>{detail.veryHealthy ? <div>Si vegetarian</div> : null}</div>
            </div>
            <div>
            <div>Score: {detail.spoonacularScore}</div>
            <div>Health Score: {detail.healthScore}</div>
            </div>
            <div>Instructions:</div>
            <div dangerouslySetInnerHTML={{__html: detail.instructions}}></div>
            </div>
    )   
}

