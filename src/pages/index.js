import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

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
        <Col xs={12} md={7}>
          {posts.map((post) => {
            const { _id, image, title, writer, createdAt } = post;
            const { username, name, lastName } = writer.length > 0 && writer[0];
            const img =
              image ||
              'https://res.cloudinary.com/practicaldev/image/fetch/s--UbduOPa1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2g86wjqt9ce7qplixp7i.png';
            return (
              <Link
                key={_id}
                to={`/${username}/${_id}`}
                style={{ textDecoration: 'none' }}
              >
                <Card className='m-3'>
                  <Card.Img variant='top' alt='cover-post' src={img} />
                  <Card.Body>
                    <div className='d-flex'>
                      <img
                        src='https://ca.slack-edge.com/TCRFJBKB6-U02KCUW0Q3H-3ad9c2dbe014-512'
                        className='rounded-circle me-2'
                        style={{ width: '2rem', height: '2rem' }}
                        alt='Avatar user'
                      />
                      <div className='d-flex flex-column align-items-start'>
                        <p className='m-0'>
                          {name} {lastName}
                        </p>
                        <p className='text-muted'>{createdAt}</p>
                      </div>
                    </div>
                    <Card.Title className=''>{title}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </Col>
        <Col>Right</Col>
      </Row>
    </div>
  );
}

export default Home;
