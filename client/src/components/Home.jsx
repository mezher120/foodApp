import React, { useState } from "react";
import Receta from "./RecetaCard";
import { useSelector, useDispatch } from "react-redux";
import {ordenDescendente, filtering, filter1, all} from '../actions'
import s from "./Home.module.css"

export default function Home(props) {
    // console.log(props, "primer");
    

    const selector = useSelector((state) => state.search)
    // const nameFilter = useSelector((state) => state.namefilter) --> filter back
    const [currentPage, setCurrentPage] = useState(0);
    // console.log(selector, "selector");
    // console.log(nameFilter, "filtering");
    const dispatch = useDispatch();

    let currentPosts = selector.slice(currentPage, currentPage + 9);
        
    // console.log(currentPosts, "que onda currentposts")

    function adelanteOnClick(e) {
            if(currentPosts.length === 9) {
                
                setCurrentPage(currentPage + 9);
            }
            console.log(currentPage);
            console.log(currentPosts, "adelante");
    }

    function atrasOnClick(e) {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 9);
        }
        console.log(currentPosts, "atras");
        console.log(currentPage, "atras");
    }
    
function SortAZ(e) {
    e.preventDefault();
    const copy = [...selector];
    if (copy) {
        const copy2 = copy.sort(function (a, b) {
             if (a.title.toLowerCase() > b.title.toLowerCase()) {
                 return 1;
             }
             if (a.title.toLowerCase() < b.title.toLowerCase()) {
                 return -1;
             }        
             return 0;
         })
    dispatch(ordenDescendente(copy2));
    }
}

function SortZA(e) {
    e.preventDefault();
    const copy = [...selector];
    if (copy) {
        const copy2 =  copy.sort(function (a, b) {
             if (a.title.toLowerCase() > b.title.toLowerCase()) {
                 return -1;
             }
             if (a.title.toLowerCase() < b.title.toLowerCase()) {
                 return 1;
             }        
             return 0;
         })
     
         dispatch(ordenDescendente(copy2));
         console.log(copy2, "za)")
     
    }
}

function SortScoreAZ(e) {
    e.preventDefault();
    const copy = [...selector];
    if (copy) {
        const copy2 = copy.sort(function (a, b) {
             if (a.score > b.score) {
                 return 1;
             }
             if (a.score < b.score) {
                 return -1;
             }        
             return 0;
         })
     
         dispatch(ordenDescendente(copy2));
         console.log(copy2, "za)")
     
    }  
}

function SortScoreZA(e) {
    e.preventDefault();
    const copy = [...selector];
    if (copy) {
        const copy2 = copy.sort(function (a, b) {
             if (a.score > b.score) {
                 return -1;
             }
             if (a.score < b.score) {
                 return 1;
             }        
             return 0;
         })
     
         dispatch(ordenDescendente(copy2));
         console.log(copy2, "za)")
     
    }  
}


// function Filter2(e) {  --> filter back
//     e.preventDefault();
//     const filteri = nameFilter;
//     console.log(filteri, e.target.value, "filter2")
//     dispatch(filtering(filteri, e.target.value));
// }

function Filter(e) {
    e.preventDefault();
    const type = e.target.value;
    console.log(type, "aca esta type");
    console.log(e.target.value);
    const copy = [...selector];
    if (copy) {
        if (type === "all") {
                  
             dispatch(all());

        }
        else {
            
            // const copy2 = copy.filter(e => e.vegan === true)
         
             dispatch(filter1(type));
        }
           
    }  
}

    return (
        <div>
            <div>
            Order By: 
            <button className={s.buttonsFilters} onClick={(e) => SortAZ(e)}>A/Z</button>
            <button className={s.buttonsFilters} onClick={(e) => SortZA(e)}>Z/A</button>
            <button className={s.buttonsFilters} onClick={(e) => SortScoreAZ(e)}>Score 1/9</button>
            <button className={s.buttonsFilters} onClick={(e) => SortScoreZA(e)}>Score 9/1</button>

            </div>
            <div>
            Filter By:  
            <button className={s.buttonsFilters} onClick={(e) => Filter(e)} value="all">All</button>
            <button className={s.buttonsFilters} onClick={(e) => Filter(e)} value="vegan">Vegan</button>
            <button className={s.buttonsFilters} onClick={(e) => Filter(e)} value="vegetarian">Vegetarian</button>
            <button className={s.buttonsFilters} onClick={(e) => Filter(e)} value="glutenFree">Gluten Free</button>
            <button className={s.buttonsFilters} onClick={(e) => Filter(e)} value="dairy free">Dairy Free</button>
            <button className={s.buttonsFilters} onClick={(e) => Filter(e)} value="ketogenic">Ketogenic</button>
            <button className={s.buttonsFilters} onClick={(e) => Filter(e)} value="lacto ovo vegetarian">Lacto Ovo Vegetarian</button>
            <button className={s.buttonsFilters} onClick={(e) => Filter(e)} value="pescetarian">Pescetarian</button>
            <button className={s.buttonsFilters} onClick={(e) => Filter(e)} value="paleo">Paleo</button>
            <button className={s.buttonsFilters} onClick={(e) => Filter(e)} value="primal">Primal</button>
            <button className={s.buttonsFilters} onClick={(e) => Filter(e)} value="whole30">Whole30</button>
            </div>
            
            <div className={s.container}>
            

            {currentPosts && currentPosts.map(e => <div key={e.id}>
               <Receta key={e.id} id={e.id} title={e.title} image={e.image} score={e.score} types={e.types} ></Receta>
           </div>) 
           }
            </div>
           <button className={s.buttonsFilters} onClick={(e) => atrasOnClick(e)}>Atras</button>
           <button className={s.buttonsFilters} onClick={(e) => adelanteOnClick(e)}>Adelante</button>
        </div>
    )
}

