import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Posts from '../components/Posts';
function Home() {
  const [posts, setPost] = React.useState([]);

  React.useEffect(() => {
    async function getAllPosts() {
      const posts = await fetch(
        'https://luis-kodemia-devto-api.vercel.app/api/posts'
      ).then((res) => res.json());
      setPost(posts.data);
    }
    getAllPosts();
  }, []);

  return (
    <div>
      <Row>
        <Col>Left</Col>
        <Col md={6}>
          {posts.map((post) => (
            <Link key={post._id} to={`/posts/${post._id}`}>
              <Posts  />
            </Link>
          ))}
        </Col>
        <Col>Right</Col>
      </Row>
    </div>
  );
}

export default Home;
