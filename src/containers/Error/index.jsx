import React from 'react';
import PropTypes from 'prop-types';
import { Container, Jumbotron } from 'react-bootstrap';
import { Wrapper } from '../../components/Wrapper';

const ErrorContainer = ({ match }) => (
  <Wrapper>
    <Container>
      <Jumbotron>
        <h1>#Error</h1>
        <h2>
          Path:
          {match?.path}
        </h2>
      </Jumbotron>
    </Container>
  </Wrapper>
);

export default ErrorContainer;

ErrorContainer.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};
