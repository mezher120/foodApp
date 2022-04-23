import React from "react";
import { connect } from "react-redux";
import Receta from "./RecetaCard";

export default function Home(props) {
    console.log(props);
    return (
        <div>
            {props.search && props.search.map(e => <div>
               <Receta key={e.id} id={e.id} title={e.title} image={e.image} vegetarian={e.vegetarian} vegan={e.vegan} glutenFree={e.glutenFree} diaryHealthy={e.diaryHealthy}></Receta>
           </div>) 
           }
        </div>
    )
}

