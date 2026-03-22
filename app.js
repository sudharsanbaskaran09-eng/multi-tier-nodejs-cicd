const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

// 🔗 MySQL Connection (UPDATE PASSWORD ONLY)
const connection = mysql.createConnection({
  host: 'pro-10.c8jiaqwom9bq.us-east-1.rds.amazonaws.com', // your RDS endpoint
  user: 'admin',
  password: 'Devops1234',  // 🔥 PUT YOUR NEW PASSWORD
  database: 'devops_db'
});

// Connect to DB
connection.connect((err) => {
  if (err) {
    console.error('❌ DB connection failed:', err);
  } else {
    console.log('✅ Connected to RDS!');
  }
});

// 🚀 TEST ROUTE
app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

// ➕ POST API - Add user
app.post('/add-user', (req, res) => {
  const { name } = req.body;

  const sql = 'INSERT INTO test (name) VALUES (?)';
  connection.query(sql, [name], (err, result) => {
    if (err) {
      console.log(err);
      res.send('Error inserting user');
    } else {
      res.send('User added!');
    }
  });
});

// 📥 GET API - Fetch users
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM test', (err, results) => {
    if (err) {
      console.log(err);
      res.send('Error fetching users');
    } else {
      res.json(results);
    }
  });
});

// 🚀 Start server
app.listen(3000, () => {
  console.log('🚀 Server running on port 3000');
});
