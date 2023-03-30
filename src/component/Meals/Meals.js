import React from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import Styles from './Meal.style'
function Meals({meal,onTouch}){
    return (
        <TouchableOpacity onPress={onTouch} >
     
            <View style={Styles.container}>
                <Image style={Styles.image} source={{uri: meal.strMealThumb}} />
                <Text style={Styles.title}>{meal.strMeal}</Text>
            </View>

    </TouchableOpacity>
     
    )
};
export default Meals;