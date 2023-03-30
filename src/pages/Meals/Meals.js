import React from 'react';
import {View ,Text,FlatList} from 'react-native';
import Meals from '../../component/Meals';
import useFetch from '../../hooks/useFetch';
function MealsFood ({route,navigation}){
    const{categorySelect}=route.params;
    const{data,error,loading}=useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+categorySelect)
    function handleSelectMeal(idMeals){
       navigation.navigate('DetailScreen',{idMeals})
    }
    const handleMeals =({item})=><Meals meal={item} onTouch={()=>handleSelectMeal(item.idMeal)} />
    return(
        <View>
        <FlatList
        data={data.meals}
        renderItem={handleMeals}/>

    </View>
    )
};
export default MealsFood;