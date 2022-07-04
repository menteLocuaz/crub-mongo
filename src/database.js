import {connect} from "mongoose";
import {MONGO_URI} from'./config'
(async () => {
    try {
      const db = await connect(MONGO_URI);
      console.log("DB connectect to", db.connection.name);
    } catch (error) {
      console.error(error);
    }
  })();