import express from "express";
import dotenv from 'dotenv';
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from './routes/transaction.js';

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

/* ROUTES */
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use("/kpi", kpiRoutes)
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        app.listen(PORT, () => {
            console.log(`Server PORT: ${PORT}`)
        })

        /* ADD DATA ONE TIME ONLY OR AS NEEDED */
        //await mongoose.connection.db.dropDatabase();
        //await KPI.insertMany(kpis);
        //await Product.insertMany(products);
        //await Transaction.insertMany(transactions);
    })
    .catch((error) => console.log(`${error} not started`))