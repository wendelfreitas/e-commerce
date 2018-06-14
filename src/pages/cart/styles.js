import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Price = styled.div`
  b {
    margin-left: 10px;
    font-size: 30px;
    color: #37bea9;
  }

  strong {
    margin-left: 70%;
    margin-top: 10px;
    font-size: 25px;
    color: #b6b6b6;
  }
`;
export const ItemList = styled.table`
  width: 100%;
  border: 1px solid #f2f2f2;
  border-radius: 3px;

  thead th {
    color: #b3b3b3;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    padding: 10px 0 0 0;
    text-align: center;
    text-align: left;
    &:nth-child(2) {
      width: 50%;
    }
  }

  tbody td {
    &:nth-child(3) {
      text-align: left;
    }
    img {
      max-width: 90px;
      max-height: 90px;
      margin: 0 20px;
      padding: 10px 0;
    }

    strong {
      font-size: 30px;
      color: #37bea9;
    }

    p {
      font-weight: bold;
      font-size: 25px;
    }

    small {
      color: #b6b6b6;
    }
    button {
      background: transparent;
      border: 0;
      img {
        cursor: pointer;
        width: 20px;
        height: 40px;
      }
    }

    input[type='number'] {
      border-radius: 3px;
      border: 1px solid #b6b6b6;
      height: 30px;
      width: 50px;
      text-align: center;

      color: #b6b6b6;
    }
  }

  tbody tr {
    border-bottom: 1px solid #f2f2f2;
    &:last-child {
      border-bottom: 0;
    }
  }

  border-collapse: collapse;
`;
