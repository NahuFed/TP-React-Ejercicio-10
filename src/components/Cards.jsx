import React from 'react';
import { Card, Button, Col} from 'react-bootstrap';

const Cards = ({objeto,indice,borrarObjeto}) => {
    return (
<Col xs={12} md={6} lg={4} className='mb-4' >
        <Card>
          <Card.Header>
            <Card.Title>Pelicula: {objeto.nombre}</Card.Title>            
          </Card.Header>
          <Card.Body >
          <div>
            <p><b>Descripcion:</b> {objeto.descripcion}</p>
            <p><b>Genero:</b> {objeto.genero}</p>
            
          </div>
            
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Button variant="danger" onClick={()=> borrarObjeto(indice)}>
              Borrar
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    );
};

export default Cards;