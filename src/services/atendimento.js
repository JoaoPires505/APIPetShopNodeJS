const RepositorieExercicio = require("../repositories/atendimento");

const repositorio = new RepositorieExercicio()

class ServicoExercicio {
    
    VerificarAtendimento(atendimento) {
        if(!atendimento){
            throw new Error('Não foi enviada o atendimento para adicionar');
        } else if(!atendimento.valor){
            throw new Error('Não foi enviado o valor do atendimento');
        } else if(!atendimento.concluido){
            throw new Error('Não foi enviado se foi concluido');
        }

        return true
    }

    async PegarUm(id, transaction) {
        return repositorio.PegarUm(id, transaction);
    }

    async PegarTodos() {
        return repositorio.PegarTodos();
    }

    async Add(atendimento, transaction) {
        this.VerificarAtendimento(atendimento)

        return repositorio.Add(atendimento, transaction);
    }

    async Update(id, atendimento) {
        if(!id) {
            throw new Error('Não foi enviado o identificador do atendimento para alterar');
        } 
        this.VerificarAtendimento(atendimento)

        return repositorio.Update(id, atendimento);
    }

    async Delete(id) {
        return repositorio.Delete(id);
    }

} 

module.exports = ServicoExercicio