import express from 'express';
import connectDB from './database-connection/db.connect.js';
import userRoutes from './user/user.controller.js';

const app = express();

//? make app use json
app.use(express.json());

//? connect DB
await connectDB();

//? register routes
app.use(userRoutes);

//? assigning port
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
