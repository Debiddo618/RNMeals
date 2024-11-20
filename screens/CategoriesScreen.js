import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";
import React, { Component } from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


function CategoriesScreen({navigation}){
  function renderCategoryItem(itemData) {
    function pressHandler(){
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
});

export default CategoriesScreen;