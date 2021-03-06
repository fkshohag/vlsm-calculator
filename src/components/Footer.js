import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <Container
      className="p-2 fixed-bottom themed-container text-light bg-secondary text-center"
      fluid
    >
      <Row>
        <Col md="6" className="offset-md-3">
          <FontAwesomeIcon icon={faLayerGroup} color="white" />
          <span> Developed by </span>
          <span>
            <b>Md. Shohag</b>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
