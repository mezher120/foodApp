import React from "react";
import { createRecipe, createRecipe1 } from "../actions";
import { connect } from "react-redux";

export function Create(props) {

    let [input, setInput] = React.useState({
        name: "",
        summary: "",
        puntuacion: "",
        level: "",
        pasoapaso: "",
        dieta: [],
    })

    let handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.selectedOptions);
        setInput({...input, [e.target.name]: e.target.value})
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
        props.createRecipe(input);
        setInput({ 
        name: "",
        summary: "",
        puntuacion: "",
        level: "",
        pasoapaso: "",
        dieta: [],})

    }

    return (
        <div>
            <h1>Crear Receta</h1>
            <br></br>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                <label>Nombre:</label>
                <input type="text" name="name" value={input.name} onChange={(e) => handleChange(e)}></input>
                </div>
                <div>
                <label>Resumen del plato:</label>
                <textarea type="text" name="summary" value={input.summary} maxLength='250' onChange={(e) => handleChange(e)}></textarea>
                </div>
                <div>
                <label>Puntuacion:</label>
                <input type="range" min="0" max="99" step="1" name="puntuacion" value={input.puntuacion} onChange={(e) => handleChange(e)}></input>
                </div>
                <div>
                <label>Nivel de "comida saludable":</label>
                <input type="text" name="level" value={input.level} onChange={(e) => handleChange(e)}></input>
                </div>
                <div>
                <label>Paso a paso:</label>
                <input type='text' name='pasoapaso' value={input.pasoapaso} onChange={(e) => handleChange(e)}></input>
                </div>
                <div>
                <label>Dieta:</label>
                <select name="dieta" value={input.dieta} multiple onChange={(e) => handleChangeOptions(e)}>
                    <option value="dieta1">Dieta1</option>
                    <option value="dieta2">Dieta2</option>
                    <option value="dieta3">Dieta3</option>
                    <option value="dieta4">Dieta4</option>
                </select>
                </div>
{/*                 <div>{`Falta completar: ${!input.name ? "nombre, " : ""}${!input.age ? "edad, " : ""}${!input.city ? "ciudad, " : ""}${!input.mail ? "mail " : ""} `} </div>
                {!error ? null : <span className={s.error}>{error}</span>}
                </div> */}
                <input type="submit" value="Crear receta"></input>
            </form>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        createRecipe: (input) => dispatch(createRecipe(input))
    }
}

export default connect(null, mapDispatchToProps)(Create)