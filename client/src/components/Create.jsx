import React from "react";
import { connect } from "react-redux";
import s from "./Create.module.css";
import axios from "axios";

export default function Create(props) {

    let [input, setInput] = React.useState({
        title: "",
        summary: "",
        puntuacion: "",
        level: "",
        pasoapaso: "",
        dieta: {
            dieta1: false, 
            dieta2: false,
            dieta3: false,
            dieta4: false },
    })

    let [error , setError] = React.useState("");

    let handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.selectedOptions);
        setInput({...input, [e.target.name]: e.target.value})
    }

    let handleChangeChecked = (e) => {
        console.log(e.target);
        console.log(e.target.checked);   
        setInput({...input, dieta: {...input.dieta, [e.target.name]: e.target.checked}})
        // setInput({...input, [e.target.name]: e.target.value})
    }

    let handleChangeOptions = (e) => {
        e.preventDefault();
        // let array = Array.from(e.target.selectedOptions, (option) => option.value);
        // setInput({...input, dieta: array})
        var options = e.target.options;
        var value = [];
         for (var i = 0, l = options.length; i < l; i++) {
         if (options[i].selected) {
        value.push(options[i].value);
        setInput({...input, dieta: value});
    }
  }
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if (input.title && input.summary) {
            // props.createRecipe(input);
            try {
                axios.post('http://localhost:3001/recipe/', input)
                .then(res => console.log(res));
            } catch (error) {
                console.log(error);
            }
            setInput({ 
            title: "",
            summary: "",
            puntuacion: "",
            level: "",
            pasoapaso: "",
            dieta: {
                dieta1: "", 
                dieta2: "",
                dieta3: "",
                dieta4: "" }
                })
        } else {
            setError('Todos los campos son requeridos');
        }

    }

    let validate1 = (value) => {
        console.log(value);
        if(value < 0 || value > 10) {
            setError('El nivel saludable debe estar comprendido entre 1 y 9');
            } else {
            setError('');
            setInput({...input, level: value});
            }
        }

    return (
        <div>
            <h1>Crear Receta</h1>
            <br></br>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                <label>Titulo:</label>
                <input className={!error ? null : s.errorInput} type="text" name="title" value={input.title} onChange={(e) => handleChange(e)}></input>
                </div>
                <div>
                <label>Resumen del plato:</label>
                <textarea type="text" className={!error ? null : s.errorInput} name="summary" value={input.summary} maxLength='250' onChange={(e) => handleChange(e)} rows="3" cols="50"></textarea>
                </div>
                <div>
                <label>Puntuacion:</label>
                <input type="range" min="0" max="99" step="1" name="puntuacion" value={input.puntuacion} onChange={(e) => handleChange(e)}></input>
                </div>
                <div>
                <label>Nivel de "comida saludable":</label>
                <input type="text" name="level" value={input.level} onChange={(e) => validate1(e.target.value)}></input>
                </div>
                <div>
                <label>Paso a paso:</label>
                <textarea type='text' name='pasoapaso' value={input.pasoapaso} onChange={(e) => handleChange(e)} rows="3" cols="50"></textarea>
                </div>
                <div>
                <label>Dieta:</label>
                <div>
                <label>Dieta1:</label>
                <input type="checkbox" name="dieta1" value={input.dieta.dieta1} onChange={(e) => handleChangeChecked(e)}></input>
                <label>Dieta2:</label>
                <input type="checkbox" name="dieta2" value={input.dieta.dieta2}  onChange={(e) => handleChangeChecked(e)}></input>
                <label>Dieta3:</label>
                <input type="checkbox" name="dieta3" value={input.dieta.dieta3} onChange={(e) => handleChangeChecked(e)}></input>
                <label>Dieta4:</label>
                <input type="checkbox" name="dieta4" value={input.dieta.dieta4} onChange={(e) => handleChangeChecked(e)}></input>
                </div>
                </div>
                {/* <div>{`Falta completar: ${!input.name ? "nombre, " : ""}${!input.summary ? "edad, " : ""}${!input.puntuacion ? "ciudad, " : ""}${!input.level ? "mail " : ""} `} </div>
                {!error ? null : <span className={s.error}>{error}</span>}
                </div> */}
                <div>
                {!error ? null : <span className={s.error}>{error}</span>}
                </div>
                <input type="submit" value="Crear receta"></input>
            </form>
        </div>
    )
}

// function mapDispatchToProps(dispatch) {
//     return {
//         createRecipe: (input) => dispatch(createRecipe(input))
//     }
// }

// export default connect(null, mapDispatchToProps)(Create)