import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Primera.module.css";
import logo from "../imagen.png"

export default function Principal(props) {
    return (
        <div className={s.distribucion}>
            <img className={s.logo} src={logo} alt="Not found"></img>
            <NavLink to='/home' className={s.botonera}>Entrar</NavLink>
        </div>
    )
}