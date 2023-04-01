const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "db.fzjyovkhjsixomieeivh.supabase.co",
  database: "postgres",
  password: "ceviche123.",
  port: 5432,
});
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  pool.query("SELECT * FROM alumnos", (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results.rows);
  });
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
