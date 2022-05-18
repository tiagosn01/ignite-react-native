import {  TouchableOpacityProps } from 'react-native'
import React from 'react'

import { 
  Container,
  Icon,
  Title,
 } from './styles'

interface TypeButtonProps extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
}

export default function TransactionTypeButton({ title, type, isActive, ...rest }: TypeButtonProps) {
  return (
    <Container {...rest} isActive={isActive} type={type}>
      <Icon name={icons[type]} type={type}/>
      <Title>
        {title}
      </Title>
    </Container>
  )
}