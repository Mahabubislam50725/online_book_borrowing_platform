import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("OnlineBookBorrowingPlatform");

export default db;
