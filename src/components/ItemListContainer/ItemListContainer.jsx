import { ProductsData } from "../../json/products";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemListContainer = (ProductsData) => {
  return (
    <div>
      {ProductsData.map((product) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="..." />
            <Card.Body>
              <Card.Title>{product.nombre}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="primary">Conocé más</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default ItemListContainer;
