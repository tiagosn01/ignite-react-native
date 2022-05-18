import React from 'react'
import { Text, TextInputProps } from 'react-native'
import { Container } from './styles'

type InputProps = TextInputProps 

export default function Input({...rest}: InputProps) {
  return (
    <Container {...rest}>
      
    </Container>
  )
}