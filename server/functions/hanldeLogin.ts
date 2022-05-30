import user from "../models/user";

const handleLogin = async (req: any, res: any) => {
  try {
    const lookForTheAccount = await user.find({
      email: req.body.email,
    });
    if (lookForTheAccount.length) {
      res.send({
        statuse: "success",
        email: lookForTheAccount[0].email,
        password: lookForTheAccount[0].password,
        fullName: lookForTheAccount[0].fullName,
        id: lookForTheAccount[0]._id,
      });
    } else {
      res.send({ statuse: "wrong" });
    }
  } catch (err) {
    console.log(err);
  }
};

export default handleLogin;
