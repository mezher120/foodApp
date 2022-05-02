import React from "react";
import vegetariano from "../icons/vegetariano.png";
import veganicon from "../icons/vegan.jpg";
import glutenfreeicon from "../icons/glutenfree.jpg";
import diary from "../icons/diary.png";
import s from "./RecetaCard.module.css";
import { NavLink } from "react-router-dom";

export default function RecetaCard({id, title, image, score, types}) {
    return (
        <div className={s.card}>
            <NavLink className={s.title} to={`/detalle/${id}`}>
            <div className={s.title}> {title} </div>
            <div><img className={s.image} src={image} alt="Not Found"></img></div>
            <div className={s.listicons}>
            <div>{score}</div>
            <ul>
            {types && types.map(e => <li>{e}</li>)}
            </ul>
            {/* {vegetarian ? <div><img className={s.icons} src={vegetariano} alt="Not Found"></img></div> : null}
            {vegan ? <div><img className={s.icons} src={veganicon} alt="Not Found"></img></div> : null}
            {glutenFree ? <div><img className={s.icons} src={glutenfreeicon} alt="Not Found"></img></div> : null}
            {diaryHealthy ? <div><img className={s.icons} src={diary} alt="Not Found"></img></div> : null} */}
            </div>
            </NavLink>

        </div>
    )
}

