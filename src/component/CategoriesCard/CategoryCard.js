import React from 'react';
import {TouchableWithoutFeedback,SafeAreaView, View, Text, Image, TouchableOpacity} from "react-native";
import styles from './CategoryCard.style';
function CategoryCard({category,onSelect}){
   return(
    <TouchableOpacity  onPress={onSelect}>
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:category.strCategoryThumb}}/>
            <Text style={styles.title}>{category.strCategory}</Text>
            <Text></Text>
        </View>
    </SafeAreaView>
</TouchableOpacity>
   )
};
export default CategoryCard;