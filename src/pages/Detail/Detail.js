import React from 'react';
import {View ,Text, FlatList} from 'react-native';
import Detail from '../../component/Detail';
import useFetch from '../../hooks/useFetch';
function DetailFood({route}){
    const{idMeals}=route.params;
       const{data,error,loading}=useFetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+idMeals)
       const handleSelectMeal =({item})=><Detail detail={item}/>
    return(
        <View>
        <FlatList
        data={data.meals}
        renderItem={handleSelectMeal}
        />
    </View>
    )
};
export default DetailFood;