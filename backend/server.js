require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/DbConnection');

const authRoutes = require('./routes/AuthRoutes');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/RoleRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);

sequelize.sync({ alter: true }).then(() => {
    console.log('DB synced');
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.error('DB connection failed:', err);
});
