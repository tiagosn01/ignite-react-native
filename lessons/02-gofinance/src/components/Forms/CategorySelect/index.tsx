import React from 'react'
import { TextInputProps } from 'react-native'
import { 
  Container,
  Category,
  Icon,
} from './styles'


interface CategorySelectProps {
  title: string;
}

export default function CategorySelect({ title }: CategorySelectProps) {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  )
}