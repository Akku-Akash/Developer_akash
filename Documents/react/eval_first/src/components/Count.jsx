import { useState } from "react"
export function Count(props){
    let [count1, setCount1] = useState(13)
    let [count2, setCount2] = useState(10)
    let [count3, setCount3] = useState(44)
    let [count4, setCount4] = useState(78)


    return (
     <div className="items">
     <span>Books : </span>


     <button className="addBook"
     onClick={()=>{
         setCount1(count1+1)
     }}
     >+</button>
     <button className="remBook"
     onClick={()=>{
         setCount1(count1-1)
         if(count1 == 0){
             setCount1(0)
         }
     }}
     >-</button>
     <span className="totalBooks">{count1}</span>
     <br />


     <span>Pens :</span>


     <button className="addPen"
     onClick={()=>{
        
         setCount2(count2+1)
     }}
     >+</button>
     <button className="remPen"
     onClick={()=>{
        setCount2(count2-1)
        if(count2 == 0){
            setCount2(0)
        }
        
    }}
     >-</button>
      <span className="totalPens">{count2}</span>
     <br />

     <span>Notebooks :</span>
     <button className="addNotebook"
      onClick={()=>{
        
        setCount3(count3+1)
    }}
     >+</button>
     <button className="remNotebook"
     onClick={()=>{
        setCount3(count3-1)
        if(count3 == 0){
            setCount3(0)
        }
    }}
     >-</button>
      <span className="totalNotebooks">{count3}</span>
     <br />

     <span>InkPens :</span>
     <button className="addInkpen"
      onClick={()=>{
        
        setCount4(count4+1)
    }}
     >+</button>
     <button className="remInkpen"
     onClick={()=>{
        setCount4(count4-1)
        if(count4 == 0){
            setCount4(0)
        }
    }}
     >-</button>
      <span className="totalInkpens">{count4}</span>
     
      <div className="total">Total:{count1+count2+count3+count4}</div>
     </div>
     )

}