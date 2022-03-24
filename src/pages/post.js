import React from 'react';
import { useParams } from 'react-router-dom';

function PostPage() {
  const params = useParams();
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
      <img src={image} alt={`${title}-${content}`} />
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default PostPage;
