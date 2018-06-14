import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.loading ? 'center' : 'space-between')};
  flex-direction: row;
`;
