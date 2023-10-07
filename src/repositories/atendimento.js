const Clientes = require('../models/clientes.js');
const Cachorros = require('../models/cachorros.js')
const Atendimento = require('../models/atendimento.js')

class RepositorieExercicio {

    async PegarUm(id, transaction) {
        return Atendimento.findOne({
            where: { id },
            transaction
        });
    }
    
    async PegarTodos() {
        return Atendimento.findAll();
    }

    async Add(atendimento, transaction) {
        const result = await Atendimento.create(atendimento, { transaction })

        return result
    }

    async Update(id, atendimento) {
        const result = await Atendimento.update(atendimento, {
            where: {
                id
            }
        })

        console.log(result)

        return result
    }

    async Delete(id) {
        return Atendimento.destroy({
            where: { id }
        });
    }

}

module.exports = RepositorieExercicio