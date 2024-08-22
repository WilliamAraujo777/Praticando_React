import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const Products = ({ products }) => {
  return (
    <Container>
      {products.map(product => (
          <Card
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
          />
      ))}
    </Container>
  );
};

export default Products;