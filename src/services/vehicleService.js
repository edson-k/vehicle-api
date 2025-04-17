
const { readFile, writeFile } = require('../utils/fileHandler');
const Vehicle = require('../models/vehicleModel');
const { randomUUID } = require('crypto');
const { vehicleSchema } = require('../schemas/vehicleSchema');

async function getAll() {
  return await readFile();
}

async function getById(id) {
  const data = await readFile();
  return data.find(v => v.id === id);
}

async function create(vehicleData) {
  const result = vehicleSchema.safeParse(vehicleData);

  if (!result.success) {
    throw { name: 'ValidationError', errors: result.error.format() };
  }

  const data = await readFile();
  const newVehicle = new Vehicle({ id: randomUUID(), ...vehicleData });
  data.push(newVehicle);
  await writeFile(data);
  return newVehicle;
}

async function update(id, updatedData) {
  const { vehicleSchema } = require('../schemas/vehicleSchema');
  const result = vehicleSchema.safeParse(updatedData);

  if (!result.success) {
    const validationError = result.error.format();
    throw { name: 'ValidationError', errors: validationError };
  }

  const data = await readFile();
  const index = data.findIndex(v => v.id === id);
  if (index === -1) return null;

  data[index] = { ...data[index], ...updatedData };
  await writeFile(data);
  return data[index];
}


async function remove(id) {
  const data = await readFile();
  const filtered = data.filter(v => v.id !== id);
  if (filtered.length === data.length) return false;
  await writeFile(filtered);
  return true;
}

module.exports = { getAll, getById, create, update, remove };
