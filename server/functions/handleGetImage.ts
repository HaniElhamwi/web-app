import user from "../models/user";

const getImage = async (req: any, res: any) => {
  try {
    const lookForImage = await user.find({
      _id: req.body.id,
    });

    res.send({ image: lookForImage[0].image });
  } catch {}
};

export default getImage;
