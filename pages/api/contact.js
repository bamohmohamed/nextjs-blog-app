import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ msg: "Invalid data." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_pwd}@${process.env.mongodb_cluster}.wt8hfwg.mongodb.net/?retryWrites=true&w=majority`
      );
    } catch (error) {
      res.status(500).json({ msg: "Could not connect to DB!" });
      return;
    }

    try {
      const db = client.db("my-blog");
      const result = await db.collection("messages").insertOne(newMessage);
    } catch (error) {
      client.close();
      res.status(500).json({ msg: "Error submitting message!" });
      return;
    }

    client.close();

    res.status(200).json({ msg: "Message sent successfully." });
  }
}
export default handler;
