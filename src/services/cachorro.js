const RepositorieExercicio = require("../repositories/cachorro");

const repositorio = new RepositorieExercicio()

class ServicoExercicio {
    
    VerficarCachorro(cachorro) {
        if(!cachorro){
            throw new Error('Não foi enviada o cachorro para adicionar');
        } else if(!cachorro.nome){
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

    async Add(cachorro, transaction) {
        this.VerficarCachorro(cachorro)

        return repositorio.Add(cachorro, transaction);
    }

    async Update(id, cachorro) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do cachorro para alterar');
        } 
        this.VerficarCachorro(cachorro)

        return repositorio.Update(id, cachorro);
    }

    async Delete(id) {
        return repositorio.Delete(id);
    }

} 

module.exports = ServicoExercicio