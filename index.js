// import Database from 'better-sqlite3';
const options = {}
// const db = new Database('db/Chinook.db', options);

const db = require('better-sqlite3')('Chinook.db', options);
db.pragma('journal_mode = WAL');

const row = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
console.log(row.firstName, row.lastName, row.email);