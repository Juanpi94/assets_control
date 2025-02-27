import { useState } from "react";
import MyComponent from "../components/MyComponent";

function Test(title, endpoint) {
    return (
        <div>
            <h1 className="text-4xl">Titlo</h1>
            <div>
                <MyComponent endpoint={endpoint} />
            </div>
        </div>
    )
}

export default Test;