const db = require("../db/db");

// GET ALL MESSAGES, SELECT * FROM messages.

async function getAllMessages(message) {
  const sql = "SELECT * FROM message";
  const result = await db.query(sql, [message]);
  return result.rows;
}
// Denna är mer korrekt gå efter denna.
// function /klassNamn/(samma data som i db.js)
async function addMessage(message, username, rooms, timestamp) {
  const sql =
    "INSERT INTO messages (message, username, rooms, timestamp) VALUES ( $1, $2, $3, $4)";
  const result = await db.query(sql, [message, username, rooms, timestamp]);
  return result.rows;
}

// GET ALL MESSAGES FROM A ROOM?
// Behöver jag lägga till meddelande för enskilt rum?
// SELECT * FROM message WHERE currentRoom = ?

async function getRoomMessage(currentRoom) {
  const sql = "SELECT * FROM message WHERE rooms = ($1)";
  const result = await db.query(sql, [currentRoom]);
  return result.rows;
}

async function deleteMessages(room) {
  const sql = "DELETE from message WHERE rooms = ($1)";
  const result = await db.query(sql, [room]);
  return result.rows;
}

module.exports = {
  getAllMessages,
  getRoomMessage,
  addMessage,
  deleteMessages,
};
