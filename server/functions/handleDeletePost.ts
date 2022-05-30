import post from "../models/posts";

const handleDeletePost = async (req: any, res: any) => {
  try {
    const deletePost = await post.remove({ _id: req.body.postId });

    console.log(deletePost);
  } catch (err) {
    console.log(err);
  }
};
export default handleDeletePost;
