import listaBotoes from "../data/listaBotoes"
import Botoes from "./Botoes"


export default function RenderBotoes(){

        function renderLista(){
            return listaBotoes.map( (e) => {
                return (
                    <>
                        <Botoes key={e.id} pergunta={e.pergunta} resposta={e.resposta} />
                    </>                       
                )
            }) 
        }

        return (
            <>
            {renderLista()}
            </>
        )
    }