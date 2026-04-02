import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;