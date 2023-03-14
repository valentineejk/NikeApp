import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
// import products from "../data/products";
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';



const ProductsScreen = ({ navigation }) => {

    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator="false"
                numColumns={ 2 }
                data={ products }
                renderItem={ ({ item }) => (
                    <Pressable onPress={ () => {

                        //nav
                        dispatch(productsSlice.actions.setSelectedProduct(item.id))

                        navigation.navigate('Product Details')
                    } } style={ styles.imageCn }>
                        <Image

                            source={ {
                                uri: item.image,
                            } }
                            style={ styles.image }
                        />
                    </Pressable>

                ) }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 1
    },
    imageCn: {
        width: "50%",
        padding: 1,

    }
})

export default ProductsScreen;
