import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { H5 } from '../../components/H5';
import { Wrapper } from '../../components/Wrapper';

const HomeContainer = ({ match }) => (
  <Wrapper>
    <Container>
      <Jumbotron>
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <Row>
          <Col
            md={{
              span: 6,
              offset: 3,
            }}
          >
            <H5>
              We now have Toasts
              <span role="img" aria-label="tada">
                🎉
              </span>
            </H5>
            <H5>
              Root path:
              {match.path}
            </H5>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  </Wrapper>
);

export default HomeContainer;

HomeContainer.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};
