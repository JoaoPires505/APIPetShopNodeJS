const RepositorieExercicio = require("../repositories/cachorros");

const repositorio = new RepositorieExercicio()

class ServicoExercicio {
    
    VerficarCachorro(cachorros) {
        if(!cachorros){
            throw new Error('Não foi enviada o cachorro para adicionar');
        } else if(!cachorros.nome){
            throw new Error('Não foi enviado o nome da cachorro');
        }

        return true
    }

    async PegarUm(id, transaction) {
        return repositorio.PegarUm(id, transaction);
    }

    async PegarTodos() {
        return repositorio.PegarTodos();
    }

    async Add(cachorros, transaction) {
        this.VerificarCachorro(cachorros)

        return repositorio.Add(cachorros, transaction);
    }

    async Update(id, cachorro) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do cachorro para alterar');
        } 
        this.VerificarCachorro(cachorro)

        return repositorio.Update(id, cachorro);
    }

    async Delete(id) {
        return repositorio.Delete(id);
    }

} 

module.exports = ServicoExercicio