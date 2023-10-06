const Clientes = require('../models/clientes.js');
const Cachorros = require('../models/cachorros.js')

class RepositorieExercicio {

    async PegarUm(id, transaction) {
        return Cachorros.findOne({
            where: { id },
            transaction
        });
    }
    
    async PegarTodos() {
        return Cachorros.findAll();
    }

    async Add(cachorros, transaction) {
        const result = await Cachorros.create(cachorros, { transaction })

        return result
    }

    async Update(id, cachorros) {
        const result = await Cachorros.update(cachorros, {
            where: {
                id
            }
        })

        console.log(result)

        return result
    }

    async Delete(id) {
        return Cachorros.destroy({
            where: { id }
        });
    }

}

module.exports = RepositorieExercicio