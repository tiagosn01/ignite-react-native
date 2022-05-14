import React from 'react'

import { 
  Container, 
  Header, 
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';
import HighightCard from '../../components/HighlightCard';
import TransactionCard, { TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export default function Dashboard() {
  const data: DataListProps[] = [{
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: "13/04/2022"
  },
  {
    id: '2',
    type: 'negative',
    title: 'Aluguel',
    amount: 'R$ 2.000,00',
    category: {
      name: 'Moradia',
      icon: 'shopping-bag'
    },
    date: "13/04/2022"
  },
  {
    id: '3',
    type: 'negative',
    title: 'Mercado',
    amount: 'R$ 1.000,00',
    category: {
      name: 'Alimentação',
      icon: 'coffee'
    },
    date: "13/04/2022"
  }]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: "https://avatars.githubusercontent.com/u/60194737?s=400&u=9529816faf68d539d7af5f96ec6968f3168e7d88&v=4"}} />

            <User>
              <UserGreeting>
                Olá,
              </UserGreeting>
            
              <UserName>
                Tiago
              </UserName>
            </User>
          </UserInfo>
          
          <Icon name="power" />
        </UserWrapper>

      </Header>

      <HighightCards>
        <HighightCard 
        type='up'
        title="Entradas"
        amount="R$ 17.400,00"
        lastTransaction='Última entrada dia 13 de abril'
      />

        <HighightCard 
        type="down"
        title="Saídas"
        amount="R$ 2.400,00"
        lastTransaction='Última entrada dia 13 de abril'
      />

        <HighightCard 
        type="total"
        title="Totais"
        amount="R$ 15.000,00"
        lastTransaction='Última entrada dia 13 de abril'
      />
      </HighightCards>

      <Transactions>
        <Title>
          Listagem
        </Title>

        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />

        

      </Transactions>
    </Container>
  )
}