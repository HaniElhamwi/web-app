import  post from "../models/posts";

const getPost = async (req: any, res: any) => {
  try {
    const searchForPosts = await post.find({});
    console.log(searchForPosts);
    res.send(searchForPosts);
  } catch (err) {
    console.log(err);
  }
};

export default getPost;
