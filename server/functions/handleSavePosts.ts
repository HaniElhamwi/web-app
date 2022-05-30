import post from "../models/posts";

const handleSavePosts = async (req: any, res: any) => {
  try {
    console.log("savepost is working");
    const savePost = new post({
      fullName: req.body.fullName,
      postImage: req.body.postImage,
      userImage: req.body.userImage,
      text: req.body.text,
      userId:req.body.userId  
    });
    savePost.save();
    console.log(
      req.body.text,
      req.body.userImage,
      req.body.postImage,
      req.body.fullName
    );
  } catch (err) {
    console.log(err);
  }
};

export default handleSavePosts;
