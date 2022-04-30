import React from "react";

export default function Pagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
        
    }
    return (
        <nav>
            <ul>

                    {pageNumbers.map(e => (<li>
                        <button onClick={(e) => paginate(e)} href="home"> {e} </button>
                    </li>))}

            </ul>
        </nav>
    )
}