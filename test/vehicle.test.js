const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const fs = require('fs').promises;
const path = require('path');
const expect = chai.expect;

const { filePath } = require('../src/utils/fileHandler');

chai.use(chaiHttp);

describe('Vehicle API', () => {
  // Cria o arquivo antes dos testes
  before(async () => {
    await fs.writeFile(filePath, '[]');
  });

  // Limpa o arquivo antes de cada teste
  beforeEach(async () => {
    await fs.writeFile(filePath, '[]');
  });

  // Remove o arquivo ao final de todos os testes
  after(async () => {
    try {
      await fs.unlink(filePath);
    } catch (err) {
      console.warn('⚠️ Erro ao remover arquivo de teste:', err.message);
    }
  });

  it('deve criar um novo veículo', async () => {
    const res = await chai.request(app).post('/vehicles').send({
      placa: 'AAA1234',
      chassi: '123456789',
      renavam: '987654321',
      modelo: 'HB20',
      marca: 'Hyundai',
      ano: '2020'
    });
    expect(res).to.have.status(201);
    expect(res.body).to.have.property('id');
  });

  it('deve listar todos os veículos', async () => {
    await chai.request(app).post('/vehicles').send({
      placa: 'BBB1234',
      chassi: '000001',
      renavam: '000002',
      modelo: 'Civic',
      marca: 'Honda',
      ano: '2019'
    });
    const res = await chai.request(app).get('/vehicles');
    expect(res.body).to.be.an('array');
  });

  it('deve atualizar um veículo', async () => {
    const { body } = await chai.request(app).post('/vehicles').send({
      placa: 'CCC1234',
      chassi: 'chassi01',
      renavam: 'renavam01',
      modelo: 'Corolla',
      marca: 'Toyota',
      ano: '2018'
    });

    const res = await chai.request(app).put(`/vehicles/${body.id}`).send({
      placa: body.placa,
      chassi: body.chassi,
      renavam: body.renavam,
      modelo: 'Corolla XEi',
      marca: body.marca,
      ano: body.ano
    });

    expect(res).to.have.status(200);
    expect(res.body.modelo).to.equal('Corolla XEi');
  });

  it('deve deletar um veículo', async () => {
    const { body } = await chai.request(app).post('/vehicles').send({
      placa: 'DDD1234',
      chassi: 'chassi02',
      renavam: 'renavam02',
      modelo: 'Cruze',
      marca: 'Chevrolet',
      ano: '2017'
    });

    const res = await chai.request(app).delete(`/vehicles/${body.id}`);
    expect(res).to.have.status(204);
  });
});
