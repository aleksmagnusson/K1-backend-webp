const { Client } = require("pg");

const db = new Client({
  ssl: {
    rejectUnauthorized: false,
  },
  connectionString: "postgres://",
});
//  .Database("./sqlite.db", (error) => {
//  if (error) {
//    console.log(error.message);
//    throw error;
//  }
//  });

// SQL databas som hämtar tabell för id, meddelande, användare, rum och tid den skapades.
const messageData = ` CREATE TABLE IF NOT EXISTS messages ( 
 id SERIAL PRIMARY KEY AUTOINCREMENT,
 message TEXT,
 username TEXT,
 rooms TEXT,
 timestamp DATE
)`;

// Databas för rum som hämtar id, rum, tid den skapades.
const roomData = ` CREATE TABLE IF NOT EXISTS rooms (
id SERIAL PRIMARY KEY AUTOINCREMENT,
rooms TEXT UNIQUE,
timestamp DATE
)`;

// const userData = ` CREATE TABLE IF NOT EXISTS users (
//  id INTEGER PRIMARY KEY AUTOINCREMENT,
//  username TEXT PRIMARY KEY,
//  current_room TEXT
// )`;

db.run(messageData, (error) => {
  if (error) {
    console.error(error.message);
    throw error;
  }
});

db.run(roomData, (error) => {
  if (error) {
    console.error(error.message);
    throw error;
  }
});

module.exports = db;
