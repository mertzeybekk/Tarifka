import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from './pages/Category/Category';
import Detail from './pages/Detail/Detail';
import Meals from './pages/Meals/Meals';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoryScreen" component={Category} options={{title:'Category'}}/>
        <Stack.Screen name="DetailScreen" component={Detail} options={{title:'Detail'}}/>
        <Stack.Screen name="MealsScreen" component={Meals} options={{title:'Meals'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;