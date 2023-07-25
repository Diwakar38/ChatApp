const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const userRoutes = require("./Routes/userRoutes");

const app = express(); // creation of express instance
dotenv.config();
app.use(express.json());
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Server is connected to DB");
    } catch (err) {
        console.log("Server is NOT connected to Database", err.message);
    }
};

connectDB();

app.get("/", (req, res) => {
    const link = "http://localhost:3000/";
    res.redirect(link);
});
app.use("/user", userRoutes);

// Importing all the .env information
const PORT = process.env.PORT || 4999;

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});
