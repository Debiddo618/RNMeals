import { Text, StyleSheet, View, FlatList} from 'react-native'
import React, { Component } from 'react'
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

function renderCategoryItem(itemData){
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
}

export default class CategoriesScreen extends Component {
  render() {
    return (
        <FlatList data={CATEGORIES} keyExtractor={(item)=> item.id} renderItem={renderCategoryItem} numColumns={2} />
    )
  }
}

const styles = StyleSheet.create({})
