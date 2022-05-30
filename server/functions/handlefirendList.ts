import user from "../models/user";

const friendList = async (req: any, res: any) => {
  try {
    const getfirendsInformation = await user.find({});
    console.log(getfirendsInformation);
    res.send(getfirendsInformation);
  } catch (err) {
    console.log(err);
  }
};

export default friendList;
