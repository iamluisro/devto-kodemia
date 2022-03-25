import React from 'react';
import Card from 'react-bootstrap/Card';

function Posts(props) {
  const {data} = props
  const {image, title, content, writer} = data
  console.log("🚀 ~ file: index.js ~ line 5 ~ Posts ~ image", image)
  return (
    <div>
      <Card className='m-3'>
        <Card.Img
          variant='top'
          alt='cover-post'
          src={image}
        />
        <Card.Body>
         <img src="" className="rounded-circle avatar" alt="Avatar user" />;

          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Posts;
