import { useState } from "react"

export default function Botoes(props){

   const [show, setShow] = useState(false)

    return(
        <div className="py-22px w-280px desk:w-350px">
            <div className="flex w-full justify-between items-center">
                
                <div>
                    {
                        show?<button className="text-12px font-kumbhSans font-bold text-veryDarkGrayishBlue desk:text-16px" onClick={()=>setShow(!show)}>{props.pergunta}</button>:<button className="text-12px font-kumbhSans font-medium text-veryDarkGrayishBlue desk:text-16px" onClick={()=>setShow(!show)}>{props.pergunta}</button>
                    }
                </div>
                {
                    show?<img className="transform rotate-180" src="./svg/icon-arrow-down.svg" alt="iconeBaixo"/>:<img src="./svg/icon-arrow-down.svg" alt="iconeBaixo"/>
                }       
            </div>   
            <div>
                {
                    show?<p className="text-12px font-kumbhSans font-medium text-darkGrayishBlue pt-22px w-242px"> {props.resposta} </p>:null
                }  
            </div>                  
        </div>       
    )
}