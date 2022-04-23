import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import icono from "./icono.png";




export default function Navbar(props) {

    let [input, setInput] = React.useState({
        name: ""
    });
    
    let handleOnChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    let handleOnSubmit = (e) => {
        e.preventDefault();
        props.getSearch(input)
    }

    return (
        <div className={s.navbar}>
            <div>
                <img className={s.icono} src={icono} alt="not found"></img>
            </div>
            <div>
                <form onSubmit={(e) => handleOnSubmit(e)}>
                <label>Buscar receta</label>
                <input type='text' name='name' value={input.name} onChange={(e) => handleOnChange(e)}></input>
                <input type='submit' value='Buscar'></input>

                </form>
                
            </div>
            <div>
                <NavLink to='/home' className={s.botonera}>HOME</NavLink>
                <NavLink to='/home/create' className={s.botonera}>CREAR</NavLink>
            </div>
        </div>
    )
}