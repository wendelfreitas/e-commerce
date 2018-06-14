import React from 'react';
import { Container } from './styles';

const ErrorBox = visible =>
  visible && (
    <Container>
      <p>Erro! Lorem Ipsum</p>
      <button>
        {/* <img src={CloseIcon} alt="Fechar" /> */}
        <p>x</p>
      </button>
    </Container>
  );

export default ErrorBox;
