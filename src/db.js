import Dexie from "dexie";

const db = new Dexie(process.env.REACT_APP_DB);
db.version(1).stores({ todos: "++id" });

export default db;
