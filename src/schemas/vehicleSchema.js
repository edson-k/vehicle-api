const { z } = require('zod');

const vehicleSchema = z.object({
    placa: z.string().min(1, 'Placa é obrigatória'),
    chassi: z.string().min(1, 'Chassi é obrigatório'),
    renavam: z.string().min(1, 'Renavam é obrigatório'),
    modelo: z.string().min(1, 'Modelo é obrigatório'),
    marca: z.string().min(1, 'Marca é obrigatória'),
    ano: z.string().min(4).max(4).regex(/^\d+$/, 'Ano deve conter apenas números')
});

module.exports = { vehicleSchema };
