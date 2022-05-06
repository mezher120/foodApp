import React, { useState } from "react";
import Receta from "./RecetaCard";
import { useSelector, useDispatch } from "react-redux";
import {ordenDescendente, ordenAscendente, filtering} from '../actions'
import s from "./Home.module.css"

export default function Home(props) {
    console.log(props, "primer");
    
    // const [order, setOrder] = useState("");
    const selector = useSelector((state) => state.search)
    const nameFilter = useSelector((state) => state.namefilter)
    const [currentPage, setCurrentPage] = useState(0);
    // const [posts, setPosts] = useState([]);
    // const [sortDown, setSortDown] = useState(true);
    console.log(selector, "selector");
    console.log(nameFilter, "filtering");
    const dispatch = useDispatch();

    let currentPosts = selector.slice(currentPage, currentPage + 9);
    // let filterPosts = selector;
        
    console.log(currentPosts, "que onda currentposts")

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


// const handleOnChange = (e) => {
//     setOrder(e.target.value);
//     console.log(order, "order");
// }

    
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
    
    // setSortDown(false);
    dispatch(ordenDescendente(copy2));
    // setPosts(copy2);
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


function Filter2(e) {
    e.preventDefault();
    const filteri = nameFilter;
    console.log(filteri, e.target.value, "filter2")
    dispatch(filtering(filteri, e.target.value));
}

function Filter(e) {
    e.preventDefault();
    const type = e.target.value;
    console.log(type, "aca esta type");
    console.log(e.target.value);
    const copy = [...selector];
    if (copy) {
        if (type === "all") {
            
            const copy2 = copy.filter(e => e.vegan === true)
         
             dispatch(ordenDescendente(copy2));
             console.log(copy2, "za)")
        }
        if (type === "vegan") {
            
            const copy2 = copy.filter(e => e.vegan === true)
         
             dispatch(ordenDescendente(copy2));
             console.log(copy2, "za)")
        }
        if (type === "vegetarian") {
            
            const copy2 = copy.filter(e => e.vegetarian === true)
         
             dispatch(ordenDescendente(copy2));
             console.log(copy2, "za)")
        }
        if (type === "glutenFree") {
            
            const copy2 = copy.filter(e => e.glutenFree === true)
         
             dispatch(ordenDescendente(copy2));
             console.log(copy2, "za)")
        }
        if (type === "diaryHealthy") {
            
            const copy2 = copy.filter(e => e.diaryHealthy === true)
         
             dispatch(ordenDescendente(copy2));
             console.log(copy2, "za)")
        }
     
    }  
}



// if (order === "za") {
//         const copy = [...selector];
//         if (copy) {
//             const stateOrdenado = copy.sort(function (a, b) {
//                  if (a.title > b.title) {
//                      return -1;
//                  }
//                  if (a.title < b.title) {
//                      return 1;
//                  }        
//                  return 0;
//              })
         
//              dispatch(ordenDescendente(stateOrdenado));
//              console.log(stateOrdenado, "za)")
         
//         }
//      }

//      if (order === "az") {
//         const copy = [...selector];
//          if (copy) {
             
//              const stateOrdenado1 = copy.sort(function (a, b) {
//                  if (a.title > b.title) {
//                      return 1;
//                  }
//                  if (a.title < b.title) {
//                      return -1;
//                  }        
//                  return 0;
//              })
         
//              dispatch(ordenAscendente(stateOrdenado1));
//              console.log(stateOrdenado1, "az)")
//          }
//     }

    return (
        <div>
            {/* <Order state={selector} ></Order> */}
            {/* <select name="order" value={order} onChange={(e) => handleOnChange(e)}>
                    <option>Sort By</option>
                    <option name="Asc" value="az">A/Z Name</option>
                    <option name="Des" value="za">Z/A Name</option>
                    <option name="AscScore" value="19">1/9 Score</option>
                    <option name="DesScore" value="91">9/1 Score</option>
                </select> */}
            <div>
            Order By: 
            <button className={s.buttonsFilters} onClick={(e) => SortAZ(e)}>A/Z</button>
            <button className={s.buttonsFilters} onClick={(e) => SortZA(e)}>Z/A</button>
            <button className={s.buttonsFilters} onClick={(e) => SortScoreAZ(e)}>Score 1/9</button>
            <button className={s.buttonsFilters} onClick={(e) => SortScoreZA(e)}>Score 9/1</button>

            </div>
            <div>
            Filter By:  
            <button className={s.buttonsFilters} onClick={(e) => Filter2(e)} value="all">All</button>
            <button className={s.buttonsFilters} onClick={(e) => Filter2(e)} value="vegan">Vegan</button>
            <button className={s.buttonsFilters} onClick={(e) => Filter2(e)} value="vegetarian">Vegetarian</button>
            <button className={s.buttonsFilters} onClick={(e) => Filter2(e)} value="glutenFree">Gluten Free</button>
            <button className={s.buttonsFilters} onClick={(e) => Filter2(e)} value="diaryHealthy">Diary Healthy</button>

            </div>
            
            <div className={s.container}>
            

            {currentPosts && currentPosts.map(e => <div key={e.id}>
               <Receta key={e.id} id={e.id} title={e.title} image={e.image} score={e.score} types={e.types} ></Receta>
           </div>) 
           }
            </div>
           <button className={s.buttonsFilters} onClick={(e) => atrasOnClick(e)}>Atras</button>
           <button className={s.buttonsFilters} onClick={(e) => adelanteOnClick(e)}>Adelante</button>
           {/* <Pagination postsPerPage={postsPerPage} totalPosts={selector.length} paginate={paginate}></Pagination> */}
        </div>
    )
}

