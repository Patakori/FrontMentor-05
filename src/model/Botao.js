export default class Botao{

    #id
    #pergunta
    #resposta


    constructor (id,pergunta,resposta){
        this.#id = id
        this.#pergunta = pergunta
        this.#resposta = resposta 
    }

    get id(){
        return this.#id
    }

    get pergunta(){
        return this.#pergunta
    }

    get resposta(){
        return this.#resposta
    }

}
