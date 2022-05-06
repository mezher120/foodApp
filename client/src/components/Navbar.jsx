import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import icono from "./icono.png";
import icono2 from "../icons/iconofood.png";
import { searching } from "../actions";
import { useDispatch } from "react-redux";




export default function Navbar(props) {

    let [input, setInput] = React.useState({
        name: ""
    });

    let dispatch = useDispatch();
    
    let handleOnChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    let handleOnSubmit = (e) => {
        e.preventDefault();
        // props.getSearch(input)
        dispatch(searching(input));
    }

    return (
        <div className={s.navbar}>
            <div>
                <img className={s.icono} src={icono2} alt="not found"></img>
            </div>
            <div>
                <form onSubmit={(e) => handleOnSubmit(e)}>
                <label className={s.textSearch}>Buscar receta</label>
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