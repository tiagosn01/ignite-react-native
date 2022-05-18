import React from 'react'
import { Text, TouchableOpacityProps } from 'react-native'
import { Container, Title } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}; 

export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  )
}