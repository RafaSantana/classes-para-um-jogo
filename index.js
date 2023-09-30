class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar() {
        const ataques = {
            mago: "magia",
            gerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken",
        }

        if (this.tipo in ataques) {
            const ataque = ataques[this.tipo]
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
        } else {
            throw new Error("Tipo de herói não disponível")
        }
    }
}


try {
    let heroiMago = new Heroi("Veigar", 1200, "ninja")
    heroiMago.atacar()
} catch (error) {
    console.error(error.message)
}