const RepositorieExercicio = require("../repositories/clientes");

const repositorio = new RepositorieExercicio()

class ServicoExercicio {
    
    VerficarCliente(cliente) {
        if(!cliente){
            throw new Error('Não foi enviada o cliente para adicionar');
        } else if(!cliente.nome){
            throw new Error('Não foi enviado o nome da cliente');
        }

        return true
    }

    async PegarUm(id, transaction) {
        return repositorio.PegarUm(id, transaction);
    }

    async PegarTodos() {
        return repositorio.PegarTodos();
    }

    async Add(cliente, transaction) {
        this.VerficarCliente(cliente)

        return repositorio.Add(cliente, transaction);
    }

    async Update(id, cliente) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do cliente para alterar');
        } 
        this.VerficarCliente(cliente)

        return repositorio.Update(id, cliente);
    }

    async Delete(id) {
        return repositorio.Delete(id);
    }

} 

module.exports = ServicoExercicio