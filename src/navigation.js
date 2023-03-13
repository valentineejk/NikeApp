import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native"
import ProductsScreen from './screens/productsScreen';
import ProductDetailsScreen from './screens/productDetailScreen';
import ShoppingCart from './screens/ShoppingCart';
import { Pressable, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{contentStyle: {backgroundColor: 'white'}}}
            >
                <Stack.Screen
                    name="Products"
                    component={ ProductsScreen }
                    options={ ({ navigation }) => ({
                        headerRight: () => (
                        <Pressable
                            style={ { flexDirection: 'row', } }
                            onPress={ () => navigation.navigate('Cart') } >
                            <FontAwesome5 name="shopping-cart" color="gray" size={ 18 } />
                            <Text style={ { fontWeight: '500', marginLeft: 5, } }>1</Text>
                        </Pressable>
                        )
                    }) } />
                <Stack.Screen name="Product Details" component={ ProductDetailsScreen } options={ {
                    presentation: 'modal'
                } } />
                <Stack.Screen name="Cart" component={ ShoppingCart } />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
