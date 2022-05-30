// import {historyModal} from "../models/history";

import historyModal from "../models/story";

const handelSaveStory = async (req: any, res: any) => {
  try {
    console.log("New Request handelSaveHistory ");

    const saveHistory = new historyModal({
      fullName: req.body.fullName,
      postImage: req.body.postImage,
    });
    saveHistory.save();
    console.log(req.body.fullName, req.body.postImage);
  } catch (err) {
    console.log(err);
  }
};

export default handelSaveStory;
