const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'rootpassword',
  database: 'people_db',
};

const connection = mysql.createConnection(config);

connection.query(`
  CREATE TABLE IF NOT EXISTS people (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  )
`);

app.get('/', (req, res) => {
  const name = `Full Cycle Rocks! name: ${Math.floor(Math.random() * 1000)}`;

  connection.query(`INSERT INTO people(name) values('${name}')`, (err) => {
    if (err) throw err;

    connection.query('SELECT name FROM people', (err, results) => {
      if (err) throw err;

      const namesList = results.map(row => `<li>${row.name}</li>`).join('');
      res.send(`<h1>Full Cycle Rocks!</h1><ul>${namesList}</ul>`);
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
