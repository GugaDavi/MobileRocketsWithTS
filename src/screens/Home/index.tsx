import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import api from "../../services/api";
import { formatPrice } from "../../utils/format";

import { Container, ProductsList } from "./styles";

import ProductItem from "../../components/ProductItem";
import { IProduct } from "../../types/dataTypes";
import * as CartEvents from "../../stores/modules/cart/actions";
import { ApplicationState } from "../../stores";
import { ICartItem } from "../../stores/modules/cart/types";

export default function Home() {
  const disptach = useDispatch();
  const [products, setProducts] = useState<IProduct[]>([]);
  const state = useSelector<ApplicationState, ICartItem[]>(
    state => state.cart.products
  );

  useEffect(() => {
    async function getProducts() {
      const resp = await api.get<IProduct[]>("/products");

      const data: IProduct[] = resp.data.map(p => ({
        ...p,
        formatedPrice: formatPrice(p.price)
      }));

      setProducts(data);
    }

    getProducts();
  }, []);

  function handleAddToCart(productId: number) {
    disptach(CartEvents.addToCartRequest(productId));
  }

  function productAmount(productId: number): string {
    const producIndex = state.findIndex(p => p.product.id === productId);

    if (producIndex >= 0) {
      return String(state[producIndex].amount);
    }
    return "0";
  }

  return (
    <Container>
      <ProductsList
        data={products}
        keyExtractor={product => String(product.id)}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <ProductItem
              product={item}
              addToCart={() => handleAddToCart(item.id)}
              amountTotal={productAmount(item.id)}
            />
          );
        }}
      />
    </Container>
  );
}
