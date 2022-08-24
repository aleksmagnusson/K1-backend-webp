const db = require("../db/db");

// GET ALL ROOMS, SELECT * FROM rooms.

async function getRooms() {
  const sql = "SELECT * from rooms";
  const result = await db.query(sql);
  return result.rows;
}

// GET ONE ROOM, INSERT INTO rooms (room) VALUES ?.

async function addRoom(timestamp, rooms) {
  const sql = "INSERT INTO rooms (timestamp, rooms) VALUES ($1, $2)";
  const result = await db.query(sql, [timestamp, rooms]);
  return result.rows;
}

// DELETE rooms, ta bort ett rum.

async function deleteRoom(room) {
  const sql = "DELETE from rooms WHERE rooms = ($1)";
  const result = await db.query(sql, [room]);
  return result.rows;
}

module.exports = {
  getRooms,
  addRoom,
  deleteRoom,
};
