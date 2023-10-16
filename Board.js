import topo from "../marioPNGs/topo2.png"
import tierra from "../marioPNGs/tierra.png"
import { useEffect } from "react"

export function Board({result, setResult, setHit}){    

    useEffect(()=>{
    
    setInterval(randomSquare, 1000)

    function randomSquare(){

        const square = document.querySelectorAll('img')
        
        square.forEach(box=>{
            box.setAttribute('src',tierra)
            box.setAttribute('name','pura tierrita bro')

        })
        let random = Math.floor(Math.random()*9)

        // console.log('random: ',random)
        // console.log('square: ', square[random].id)
        square[random].setAttribute('src',topo)
        square[random].setAttribute('name','el PinshiTopo XD')   
    }},[])

    function handleMouseUp(e){

        // console.log(e.target.name)
        // console.log(topo)
        // console.log('tome wey!')
        
        if(e.target.name === 'el PinshiTopo XD'){
            setResult(result+1)
            setHit('tome wey!')
            setInterval(()=>setHit('_'),500)
        }else{
            setHit('pura tierrita mi bro')
            setInterval(()=>setHit('_'),500)
        }
      
    }    

    return(
        <>
            <div className="border" style={{width: '100px', height: '100px', padding: '0'}} ><img className="square" id="1" src={tierra} style={{height: '95px'}} alt="caca" onMouseUp={handleMouseUp}/></div>
            <div className="border" style={{width: '100px', height: '100px', padding: '0'}} ><img className="square" id="2" src={tierra} style={{height: '95px'}} alt="caca" onMouseUp={handleMouseUp}/></div>
            <div className="border" style={{width: '100px', height: '100px', padding: '0'}} ><img className="square" id="3" src={tierra} style={{height: '95px'}} alt="caca" onMouseUp={handleMouseUp}/></div>
            <div className="border" style={{width: '100px', height: '100px', padding: '0'}} ><img className="square" id="4" src={tierra} style={{height: '95px'}} alt="caca" onMouseUp={handleMouseUp}/></div>
            <div className="border" style={{width: '100px', height: '100px', padding: '0'}} ><img className="square" id="5" src={tierra} style={{height: '95px'}} alt="caca" onMouseUp={handleMouseUp}/></div>
            <div className="border" style={{width: '100px', height: '100px', padding: '0'}} ><img className="square" id="6" src={tierra} style={{height: '95px'}} alt="caca" onMouseUp={handleMouseUp}/></div>
            <div className="border" style={{width: '100px', height: '100px', padding: '0'}} ><img className="square" id="7" src={tierra} style={{height: '95px'}} alt="caca" onMouseUp={handleMouseUp}/></div>
            <div className="border" style={{width: '100px', height: '100px', padding: '0'}} ><img className="square" id="8" src={tierra} style={{height: '95px'}} alt="caca" onMouseUp={handleMouseUp}/></div>
            <div className="border" style={{width: '100px', height: '100px', padding: '0'}} ><img className="square" id="9" src={tierra} style={{height: '95px'}} alt="caca" onMouseUp={handleMouseUp}/></div>
        </>

    )
}