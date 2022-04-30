// import React from "react";
// import { useDispatch } from "react-redux";
// import { ordenAscendente, ordenDescendente } from "../actions";

// export default function OrderButton({state}) {
//     const [order, setOrder] = React.useState();
//     const dispatch = useDispatch();

// const handleOnChange = (e) => {
//     setOrder(e.target.value);
// }

// if (order === "az") {
//    const stateOrdenado = state.sort(function (a, b) {
//         if (a.title > b.title) {
//             return 1;
//         }
//         if (a.title < b.title) {
//             return -1;
//         }        
//         return 0;
//     })

//     dispatch(ordenAscendente(stateOrdenado));

// }

// if (order === "za") {
//     const stateOrdenado = state.sort(function (a, b) {
//          if (a.title > b.title) {
//              return -1;
//          }
//          if (a.title < b.title) {
//              return 1;
//          }        
//          return 0;
//      })
 
//      dispatch(ordenDescendente(state));
 
//  }

    
//     return(
//             <div>
//                 <select name="order" value={order} onChange={(e) => handleOnChange(e)}>
//                     <option>Sort By</option>
//                     <option name="Asc" value="az">A/Z Name</option>
//                     <option name="Des" value="za">Z/A Name</option>
//                     <option name="AscScore" value="19">1/9 Score</option>
//                     <option name="DesScore" value="91">9/1 Score</option>
//                 </select>
//              </div>   
//     )
// }