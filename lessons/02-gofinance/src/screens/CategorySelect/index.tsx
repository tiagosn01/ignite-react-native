import { View, Text } from 'react-native'
import React from 'react'
import { 
  Container,
  Header,
  Title,
 } from './styles'

interface CategoryProps {
  key: string;
  name: string;
}

interface CategorySelectProps {
  category: string;
  setCategory: (category: CategoryProps) => void;
  closeSelectCategory: () => void;
}

export default function CategorySelect({ 
  category, 
  setCategory, 
  closeSelectCategory 
}: CategorySelectProps) {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
        
      </Header>
    </Container>
  )
}