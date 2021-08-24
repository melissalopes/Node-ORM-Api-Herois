class NaoPodeSerNulo extends Error {
    constructor(nome){ 
        super(`O campo ${nome} não pode ser nulo!`)
        this.name = 'NaoEncontrado'
        this.idErro = 0
    }
}

module.exports = NaoPodeSerNulo