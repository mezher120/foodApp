import React from "react";
import s from "./Create.module.css";
import axios from "axios";

export default function Create(props) {

    let [input, setInput] = React.useState({
        title: "",
        summary: "",
        puntuacion: "50",
        level: "",
        pasoapaso: "",
        dieta: [],
    })
    let [types , setTypes] = React.useState("");
    let [error , setError] = React.useState("");
    let [error1 , setError1] = React.useState("");

     React.useEffect(() => {
        async function getData() {
            setTypes(await axios.get('/types/'));
           
        }
        getData();
        console.log(types, 'cargados los types');
    }, []);
    console.log(types, "types");

    let handleChange = (e) => {
        e.preventDefault();
        // console.log(e.target.selectedOptions);
        setInput({...input, [e.target.name]: e.target.value})
    }
    
    let handleChangeChecked = (e) => {
        let dieta = [];
        if (input.dieta.length > 0) {
            dieta = [...input.dieta];
        }   
        if (e.target.checked) {
            dieta.push(e.target.value);
        } else {
            if(dieta) {
                dieta = dieta.filter(element => element !== e.target.value);
            }
        }
        // console.log(e.target);
        // console.log(e.target.checked);   
        setInput({...input, dieta: dieta})
        // setInput({...input, [e.target.name]: e.target.value})
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(input, "input creado");
        console.log(e.target, "target creado");
        if (input.title && input.summary) {
            // props.createRecipe(input);
            try {
                axios.post('/recipe/', input)
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
            dieta: [],  
                })
            setError("");
            setError1("");
        } else {
            setError('Los campos Titulo y Resumen son requeridos');
        }

    }

    let validate1 = (value) => {
        console.log(value);
        if(value < 0 || value > 10) {
            setError1('El nivel saludable debe estar comprendido entre 1 y 9');
            } else {
            setError1('');
            setInput({...input, level: value});
            }
        }

    return (
        <div>
            <h1>Crear Receta</h1>
            <br></br>
            <form onSubmit={(e) => handleSubmit(e)}>
            <div className={s.container}>
            <div>
                <div className={s.inputs}>
                <label>Titulo:</label>
                <input className={!error ? null : s.errorInput} type="text" name="title" value={input.title} onChange={(e) => handleChange(e)}></input>
                </div>
                <div  className={s.inputs}>
                <label >Resumen del plato:</label>
                <textarea type="text" className={!error ? null : s.errorInput} name="summary" value={input.summary} maxLength='250' onChange={(e) => handleChange(e)} rows="3" cols="50"></textarea>
                </div>
                <div className={s.inputs}>
                <label>Puntuacion: {input.puntuacion} </label>
                <input type="range" min="0" max="99" step="1" name="puntuacion" value={input.puntuacion} onChange={(e) => handleChange(e)}></input>
                </div>
                <div className={s.inputs} >
                <label>Nivel de "comida saludable":</label>
                <input className={!error1 ? null : s.errorInput} type="number" name="level" value={input.level} onChange={(e) => validate1(e.target.value)}></input>
                </div>
                <div className={s.inputs} >
                <label>Paso a paso:</label>
                <textarea type='text' name='pasoapaso' value={input.pasoapaso} onChange={(e) => handleChange(e)} rows="3" cols="50"></textarea>
                </div>
            </div>
            <div>
                <label>Dieta:</label>
                <div>
                {types.data && types.data.map(element => 
                    <div className={s.checkbox} key={element.id}>
                        <label>{element.title}</label>
                        <input type="checkbox" name={element.title} value={element.id} onChange={(e) => handleChangeChecked(e)}></input>
                    </div>
                )}
                </div>
            </div>
            </div>
                <div>
                <div>
                {!error ? null : <span className={s.error}>{error}</span>}
                </div>
                <div>
                {!error1 ? null : <span className={s.error}>{error1}</span>}
                </div>
                </div>
                <input className={s.submit} type="submit" value="Crear receta"></input>
            </form>
        </div>
    )
}