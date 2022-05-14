import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FlatList, FlatListProps } from "react-native";
import { Feather } from '@expo/vector-icons';
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
`;
