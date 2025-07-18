describe('GET /usuarios - Listar usuários', () => {

  it('Deve retornar todos os usuários cadastrados com sucesso', () => {
    cy.request('/usuarios').then((res) => {
      expect(res.status).to.eq(200); // Verifica status OK
      expect(res.body).to.have.property('usuarios'); // Verifica se existe o array 'usuarios'
      expect(res.body.usuarios).to.be.an('array'); // Garante que é um array

      // Valida estrutura do primeiro usuário
      if (res.body.usuarios.length > 0) {
        expect(res.body.usuarios[0]).to.have.all.keys(
          '_id', 'nome', 'email', 'password', 'administrador'
        );
      }
    });
  });

});
