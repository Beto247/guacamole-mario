import { useState } from "react";
import { Board } from "./Board";


export function Guacamole(){
    const [result, setResult] = useState(0)
    const [hit, setHit] = useState('_')

    
    console.log(result)
    return(
        <>
        <h3>Score:<span id="result">{result}</span></h3>
        <h3>{hit}</h3>
        <div className="d-flex justify-content-center align-items-center" >        
        <div className="border flex col-3 row justify-content-center align-items-center" style={{width: '310px', height: '300px', padding: '0'}}>
            <Board setResult={setResult} result={result} setHit={setHit}/>
        </div>
        </div>
        </>
    )
}