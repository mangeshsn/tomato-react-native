import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";


const FoodCard = ({ result }) => {
  return (
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{result.name}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: result.image_url }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="star" />
              <Text>{result.rating}</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>{result.review_count} Comments</Text>
            </Button>
          </Body>
        </CardItem>
      </Card>
    </Content>
  );
};

const styles = StyleSheet.create({
    title:{
        fontSize: 19,
        fontWeight: 'bold'
    }
});


export default FoodCard;
