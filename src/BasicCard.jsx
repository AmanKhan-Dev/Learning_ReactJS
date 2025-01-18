import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://imgcdn.stablediffusionweb.com/2024/3/16/6e3709ea-d876-4a33-81a0-6fcf4dfb8aa8.jpg"
        style={{ height: '150px', objectFit: 'cover' }} // Adjust the height and fit
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>

    
  );
}

export default BasicCard;
