const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const path = require('path');



dotenv.config();
const app = express();

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));

connectDB();

const projectRoutes = require('./routes/projectRoutes');
const messageRoutes = require('./routes/messageRoutes');

app.use(cors({
  origin: "https://portfolio-website-react-9l1h.onrender.com", // your frontend
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));
app.use('/api/projects', projectRoutes);
app.use('/api/messages', messageRoutes);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
