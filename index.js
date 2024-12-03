import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import funciones from './express/Funciones.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/HydraulicSoltionsO/servicios', funciones.obtenerServicios);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, (error) => {
    if (error) {
        console.error('Error al iniciar el servidor:', error);
    } else {
        console.log('APIs listas en el puerto 3000');
    }
});
