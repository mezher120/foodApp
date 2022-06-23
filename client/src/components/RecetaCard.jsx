import React from "react";
import vegetariano from "../icons/vegeterian.png";
import veganicon from "../icons/vegan.png";
import glutenfreeicon from "../icons/gluten.png";
import diary from "../icons/diary.png";
import trophy from "../icons/trophy.png";
import fruit from "../icons/fruit.png";
import katogenic from "../icons/katogenic.png";
import fish from "../icons/fish.png";
import meat from "../icons/meat.png";
import iconofood from "../icons/iconofood.png";
import s from "./RecetaCard.module.css";
import { NavLink } from "react-router-dom";

export default function RecetaCard({id, title, image, score, types}) {
    return (
        <div className={s.card}>
            <NavLink className={s.title} to={`/detalle/${id}`}>
            <div className={s.title}> {title} </div>
            <div><img className={s.image} src={image ? image : iconofood} alt="Not Found"></img></div>
            <div className={s.listicons}>
            <div>
                <img className={s.icons} src={trophy} alt="Not Found"></img>
                {score}
            </div>
            <div className={s.types}>
                {types && types.map(items => 
                <div>
                {items === "vegetarian" ? <img className={s.icons} src={vegetariano} alt="Not Found"></img> : 
                (items === "vegan") ? <img className={s.icons} src={veganicon} alt="Not Found"></img> :
                (items === "glutenFree") ? <img className={s.icons} src={glutenfreeicon} alt="Not Found"></img> : 
                (items === "ketogenic") ? <img className={s.icons} src={katogenic} alt="Not Found"></img> : 
                (items === "pescetarian") ? <img className={s.icons} src={fish} alt="Not Found"></img> : 
                (items === "lacto vegetarian") ? <img className={s.icons} src={vegetariano} alt="Not Found"></img> : 
                (items === "ovo vegetarian") ? <img className={s.icons} src={vegetariano} alt="Not Found"></img> : 
                (items === "lacto ovo vegetarian") ? <img className={s.icons} src={katogenic} alt="Not Found"></img> : 
                (items === "primal") ? <img className={s.icons} src={meat} alt="Not Found"></img> : 
                (items === "paleo") ? <img className={s.icons} src={meat} alt="Not Found"></img> : 
                (items === "Low FODMAP") ? <img className={s.icons} src={katogenic} alt="Not Found"></img> : 
                (items === "whole30") ? <img className={s.icons} src={katogenic} alt="Not Found"></img> : 
                (items === "fruitarian") ? <img className={s.icons} src={fruit} alt="Not Found"></img> : 
                (items === "dairy free") ? <img className={s.icons} src={diary} alt="Not Found"></img> : 
                items}
                 </div>
                )}
            </div>
            </div>
            </NavLink>

        </div>
    )
}

