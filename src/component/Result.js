import React from "react";
import { useSelector } from "react-redux";


const Result = () => {
    const {total} = useSelector ((rootReducer)=> rootReducer.counter)
    console.log(total);


return (
    <div>
        <h1> coba page result</h1>
        <h1>{total}</h1>
    </div>

)
}

export default Result

