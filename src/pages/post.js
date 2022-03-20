import React from 'react';
import { useParams } from 'react-router-dom';

function PostPage() {
  const params = useParams();
  console.log("🚀 ~ file: post.js ~ line 6 ~ PostPage ~ params", params)
  const [postData, setPostData] = React.useState({});
  const { title, image, content } = postData;
  React.useEffect(() => {
    async function getPost() {
      const post = await fetch(
        `https://luis-kodemia-devto-api.vercel.app/api/posts/${params.postId}`
      ).then((res) => res.json());
      setPostData(post.data);
    }
    getPost();
  }, [params.postId]);

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default PostPage;
