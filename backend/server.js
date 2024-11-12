import express from 'express';
import pg from "pg";
import cors from 'cors';

const app = express();
const port = 5001;
const { Pool } = pg;

app.use(cors());

const pool = new Pool({
    user: "shivamshandilya",
    host: "localhost",
    database: "postgres",
    password: "Momo@123",
    port: 5432
})

app.get('/v1/MarketData', async (req,res) => {
    try{
        const result = await pool.query("SELECT * FROM market_data ORDER by id");
        res.json(result.rows);
    }
    catch(error){
        console.log("error fetching market data" +error);
        res.status(500).send("Server Error");
    }
});

app.listen(port, () => {
    console.log("server running on port" +port);
})

