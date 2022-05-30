// const user = require("../models/user")
import user from "../models/user";

const handleSignup = async (req: any, res: any) => {
  try {
    const chechingUserInformation = await user.find({
      email: req.body.email,
    });

    // console.log(chechingUserInformation)

    if (chechingUserInformation.length) {
      res.send({ statuse: "thereIsAnAccount" });

      return;
    } else {
      const saveUser = new user({
        fullName: req.body.fullName,
        password: req.body.password,
        email: req.body.email,
        image: "Arrow.jpg",
      });
      saveUser.save();
      res.send({ status: "seccess" });
    }

    // console.log(req.body.email,req.body.password,req.body.fullName)
  } catch ({ err }) {
    console.log(err);
  }
};

export default handleSignup;
