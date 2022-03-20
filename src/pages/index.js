import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Layout from '../components/layout';
import Posts from '../components/posts';
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
            <Link to={`/posts/${post._id}`} key={post._id}>
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
