import styled from "styled-components/native";
import { FlatList } from "react-native";

import { IProduct } from "../../types/dataTypes";

export const Container = styled.View`
  background-color: #191920;
  flex: 1;

  padding: 20px 20px 0px;
`;

class FlatProductList extends FlatList<IProduct> {}

export const ProductsList = styled(FlatProductList)``;
