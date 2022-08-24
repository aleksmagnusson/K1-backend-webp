const { Client } = require("pg");

const db = new Client({
  ssl: {
    rejectUnauthorized: false,
  },
  connectionString: process.env.DATABASE_URL,
});
//  .Database("./sqlite.db", (error) => {
//  if (error) {
//    console.log(error.message);
//    throw error;
//  }
//  });

// SQL databas som hämtar tabell för id, meddelande, användare, rum och tid den skapades.
const messageData = ` CREATE TABLE IF NOT EXISTS messages ( 
 id SERIAL PRIMARY KEY,
 message TEXT,
 username TEXT,
 rooms TEXT,
 timestamp TEXT
)`;

// Databas för rum som hämtar id, rum, tid den skapades.
const roomData = ` CREATE TABLE IF NOT EXISTS rooms (
id SERIAL PRIMARY KEY,
rooms TEXT,
timestamp TEXT
)`;

// const userData = ` CREATE TABLE IF NOT EXISTS users (
//  id INTEGER PRIMARY KEY AUTOINCREMENT,
//  username TEXT PRIMARY KEY,
//  current_room TEXT
// )`;

db.query(messageData, (error) => {
  if (error) {
    console.error(error.message);
    throw error;
  }
});

db.query(roomData, (error) => {
  if (error) {
    console.error(error.message);
    throw error;
  }
});

module.exports = db;
