// server.js
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    try {
        const response = await axios.get(API_URL, {
            params: {
                q: city,
                appid: process.env.API_KEY,
                lang: 'es',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener los datos del clima');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
