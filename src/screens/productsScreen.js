import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import products from "../data/products";
import Navigation from '../navigation';

const ProductsScreen = ({ navigation }) => {
    return (
        <View>
            <FlatList
            showsVerticalScrollIndicator="false"
                numColumns={ 2 }
                data={ products }
                renderItem={ ({ item }) => (
                    <Pressable onPress={ () => navigation.navigate('Product Details')} style={ styles.imageCn }>
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
