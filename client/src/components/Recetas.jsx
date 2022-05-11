import React from "react";
import axios from "axios";
import s from './Recetas.module.css';
import iconofood from '../icons/iconofood.png';


export default function Recetas(props) {
    // console.log(props);
    let id = props.match.params.id;

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
        // console.log(detail, "bueno bueno");
        return () => {
            setDetail({});
        }

    },[]);
    
    // console.log(detail, "que bueno esto");
    
    return (
        <div className={s.container}> 
            <div className={s.titulo} >Titulo: {detail.title}</div>
            <div><img width="300px" height="300px" src={detail.image ? detail.image : iconofood} alt="not found"></img></div>
            <div className={s.subtitulos} >Summary:</div>
            <div dangerouslySetInnerHTML={{__html: detail.summary}}></div>
            <br></br>
            <div className={s.subtitulos} >Types</div>
            <ul>
                {detail.types && detail.types.map(e => <li>{e}</li>)}
            </ul>
            <div>
            <div className={s.subtitulos}>Score: {detail.score}</div>
            <div className={s.subtitulos}>Health Score: {detail.healthScore}</div>
            </div>
            <br></br>
            <div className={s.subtitulos}>Instructions:</div>
            <div dangerouslySetInnerHTML={{__html: detail.instructions}}></div>
            <br></br>
            <button className={s.buttons} onClick={() => props.history.goBack()}>Volver</button>
            </div>
    )   
}

