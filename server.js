
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Accueil de l'API
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Bienvenue chez FMK GSM SOLUTION RDC",
    version: "1.0.0"
  });
});

// Vérifier que le serveur fonctionne
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "online",
    service: "FMK GSM SOLUTION RDC"
  });
});

// Exemple de route API
app.get("/api/services", (req, res) => {
  res.json({
    success: true,
    services: [],
    message: "Les services seront ajoutés ici."
  });
});

// Route inconnue
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route introuvable."
  });
});

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({
    success: false,
    message: "Erreur interne du serveur."
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(
    `FMK GSM SOLUTION RDC démarré sur le port ${PORT}`
  );
});
