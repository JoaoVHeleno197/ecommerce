import styled from "styled-components";

export const ProductBackground = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  min-width: 250px;
  max-width: 400px;
  min-height: 300px;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const ProductTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  color: #666666;
  margin-bottom: 20px;
`;

export const ProductPrice = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #333333;
`;
