import RenderBotoes from "./RenderBotoes";

export default function Estrutura(){
    return(
    <>
        <h1 className="font-kumbhSans font-bold text-26px text-center pb-47px pt-138px desk:pt-20 desk:pl-24 desk:text-30px">FAQ</h1>
        <div className="flex flex-col items-center desk:pl-96">
            <div className="divide-y border-b">
                <RenderBotoes />
            </div>
            <div className="pb-49px"></div>
        </div>
    </>
    )
}
//pb-49px