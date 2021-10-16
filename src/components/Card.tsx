import Estrutura from "./Estrutura";

export default function Card(){
    return(
        <div className="px-24px pb-85px pt-184px w-screen h-full desk:px-280px desk:py-128px">
            <div className="overflow-hidden bg-white rounded-3xl shadow-3xl">
                <div className="relative">
                    <img className="hidden transform desk:z-20 desk:absolute desk:block desk:translate-y-250px desk:-translate-x-20" src="./svg/illustration-woman-online-desktop.svg" alt="icone"/>
                    <img className="hidden transform desk:z-10 desk:absolute desk:block desk:scale-80% desk:-translate-x-100 desk:-translate-y-44" src="./svg/bg-pattern-desktop.svg" alt="icone" />
                    <Estrutura />
                </div>
            </div>
        </div>
    )
}