import React from "react";
import { useState } from "react";

export default function Home () {
    const [count , setCount ] = useState(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>count on me </button>
        </div>
    )
}

