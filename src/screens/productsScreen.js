import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import products from "../data/products";

const ProductsScreen = () => {
    return (
        <View>
            <FlatList
            showsVerticalScrollIndicator="false"
                numColumns={ 2 }
                data={ products }
                renderItem={ ({ item }) => (
                    <View style={ styles.imageCn }>
                        <Image

                            source={ {
                                uri: item.image,
                            } }
                            style={ styles.image }
                        />
                    </View>

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
