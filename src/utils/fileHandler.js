const fs = require('fs').promises;
const path = require('path');

const isTest = process.env.NODE_ENV === 'test';
const filePath = path.join(__dirname, isTest ? '../../data/vehicles.test.json' : '../../data/vehicles.json');

async function readFile() {
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

async function writeFile(data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

module.exports = { readFile, writeFile, filePath };
