import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
    <Layout>
      <Row>
        <Col>Left</Col>
        <Col md={6}>
          {posts.map((post) => (
            <Posts key={post._id} />
          ))}
        </Col>
        <Col>Right</Col>
      </Row>
    </Layout>
  );
}

export default Home;
