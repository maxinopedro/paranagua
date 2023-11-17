const Cadastro = require("../models/Cadastro.js");

class CadastroController {
  async newCadastro(req, res) {
    const { nome, email, telefone, mesagem } = req.body;

    const contact = await Cadastro.create({
      nome,
      email,
      telefone,
      mesagem,
    });
    return res.status(201).json([contact]);
  }
}

module.export = CadastroController