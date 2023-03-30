import React,{useState} from 'react';
import {View ,Text,FlatList} from 'react-native';
import CategoryCard from '../../component/CategoriesCard/CategoryCard'
import useFetch from '../../hooks/useFetch';
function Category({navigation}){

    const url='https://www.themealdb.com/api/json/v1/1/categories.php'
    const  {error,loading,data}=useFetch(url);
    function handleSelect(categorySelect){
      navigation.navigate('MealsScreen',{categorySelect})
      console.log(categorySelect);
    }

    const handle =({item})=><CategoryCard category={item} onSelect={()=>handleSelect(item.strCategory)} />
    return(
        <View>
        <FlatList
          data={data.categories}
          renderItem={handle}
        />
    </View>
    )
};
export default Category;