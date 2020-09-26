module.exports = {
  async index(req, res) {
    req.io.emit("occurrences", "mensagem passada");

    return res.json();
  },
};
