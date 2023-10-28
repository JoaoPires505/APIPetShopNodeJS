const ServicoUsuario = require("../services/config.js")

const servico = new ServicoUsuario()

class ControllerUsuario {

    async Login(req, res) {
        const { email, senha } = req.body;

        const { dataValues: pessoa } = await servico. PegarUmPorEmail(email);
        if (!pessoa) {
        return res.status (401).json({ mensagem: 'Credenciais inválidas' });
        }
        console.log(pessoa.senha, senha)
        if (!(await bcrypt.compare(senha, pessoa.senha))) {
        return res.status (401).json({ mensagem: 'Credenciais inválidas' });
        }
        const token = jwt.sign(
        { id: pessoa.id, nome: pessoa.nome, email: pessoa.email }, 
        config.secret
        )
        res.json({ mensagem: "Login bem-sucedido", token });
    }
        
    
   
}

module.exports = ControllerUsuario