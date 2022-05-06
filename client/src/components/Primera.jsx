import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import s from "./Primera.module.css";
import logo from "../imagen.png";
import logo2 from "../icons/iconofood.png";
import axios from "axios";

export default function Principal(props) {

    useEffect(() => {
        async function postData() {
            await axios.post('http://localhost:3001/types/');
        }
        postData();
        console.log('cargados los types');
    }, []);

    return (
        <div className={s.distribucion}>
            <img className={s.logo} src={logo2} alt="Not found"></img>
            <NavLink to='/home' className={s.botonera}>Entrar</NavLink>
        </div>
    )
}