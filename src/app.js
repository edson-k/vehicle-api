require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/vehicles', vehicleRoutes);

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
}


module.exports = app;
