import React from 'react';
import Card from 'react-bootstrap/Card';

function Posts() {
  return (
    <div>
      <Card className='m-3'>
        <Card.Img
          variant='top'
          src='https://res.cloudinary.com/practicaldev/image/fetch/s--nb36aYKf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bmhenvulkzg8as4smqgi.png'
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Posts;
