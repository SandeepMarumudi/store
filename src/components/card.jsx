




import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Card1=({img,title,text,id})=> {
  return (
    
    <Card style={{ width: '18rem',border:"1px solid"}}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {text}
        </Card.Text>
        <Link to={`/products/${id}`}><Button variant="primary">View Product</Button></Link>
        
       
      </Card.Body>
    </Card>
    
  );
}

export default Card1;