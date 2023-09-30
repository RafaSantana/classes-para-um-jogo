class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar() {
        this.ataque = this.tipo
        switch (true) {
            case this.ataque === "mago":
                this.ataque = "magia"
                break;
            case this.ataque === "guerreiro":
                this.ataque = "espada"
                break;
            case this.ataque === "monge":
                this.ataque = "artes marciais"
                break;
            case this.ataque === "ninja":
                this.ataque = "shuriken"
                break;
            default:
                console.log("Opção invalida")
                break;
        }

        if ((this.tipo != "mago") && (this.tipo != "guerreiro") && (this.tipo != "monge") && (this.tipo != "ninja")) {

            this.mensagemAtaque = console.log("Tipo de herói não disponível...")

        } else {
            this.mensagemAtaque = console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
        }

        return this.mensagemAtaque
    }
}

let heroiMago = new heroi("Veigar", 1000, "ninja")

heroiMago.atacar()