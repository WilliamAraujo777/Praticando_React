import styled from 'styled-components';
import Image from './Image';

// Contêiner do card com Flexbox
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 200px;
  background-color: #fff;
  padding: 10px;
  margin: 10px; 
`;

// Título do card com espaçamento
const CardTitle = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

// Descrição do card com espaçamento
const CardDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin: 10px 0;  
`;

// Componente Card
const Card = ({ title, description, imageUrl }) => {
  return (
    <CardContainer>
      <Image src={imageUrl} alt={title} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default Card;