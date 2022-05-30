// import {historyModal} from "../models/history";

import history from "../models/story";

const handleGetStories = async (req: any, res: any) => {
  try {
    const getStories = await history.find({});

    res.send(getStories);
    console.log(getStories);
  } catch (err) {
    console.log(err);
  }
};

export default handleGetStories;
