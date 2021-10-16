export default function Illustracao(){
    return (
        <>
            <img className="absolute transform translate-x-10 translate-y-75px desk:hidden" src="./svg/illustration-woman-online-mobile.svg" alt="icone" />
           
            <img className="absolute transform scale-64% -translate-y-4 desk:hidden" src="./svg/bg-pattern-desktop.svg" alt="icone" />
            
            <img className="hidden transform desk:z-30 desk:absolute desk:block desk:translate-x-12rem desk:translate-y-22rem" src="./svg/illustration-box-desktop.svg" alt="icone" />
        </>
    )
}

//<img className="hidden transform desk:absolute desk:block desk:translate-y-220px desk:translate-x-200px" src="./svg/illustration-woman-online-desktop.svg" alt="icone" />
//<img className="hidden transform desk:absolute desk:block desk:scale-80% desk:-translate-x-48 desk:-translate-y-16" src="./svg/bg-pattern-desktop.svg" alt="icone" />