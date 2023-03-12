import { StyleSheet, View, Image, FlatList, useWindowDimensions, Text, ScrollView } from "react-native";
import products from "../data/products";

const ProductDetailsScreen = () => {
    const product = products[0];
    const { width } = useWindowDimensions();
    return (
        <View>
            <ScrollView
            showsVerticalScrollIndicator="false"
            >
            {/* Image Carousel */ }
            <FlatList
            
            horizontal
            pagingEnabled
                showsHorizontalScrollIndicator="false"
                // numColumns={ 2 }
                data={ product.images }
                renderItem={ ({ item }) => (

                    <Image

                        source={ {
                            uri: item,
                        } }
                        style={{
                            width,
                            aspectRatio: 1,
                        } }
                    />


                ) }
            />
            <View style={{
                padding: 20
            }}>
            {/* Title */ }
            <Text style={styles.title}>
                { product.name}
            </Text>

            {/* Price */ }
            <Text style={ styles.price }>
                ${ product.price }
            </Text>

            {/* Description */ }
            <Text style={ styles.description }>
                { product.description }
            </Text>
            </View>
            {/* Add to cart button */ }

            {/* Navigation icon */ }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    // imageCn: {
    //     width: width,
    //     aspectRatio: 1,

    // }

    title: {
        fontSize: 34,
        fontWeight: "500",
        marginVertical: 10,
    },
    price: {
        fontWeight: "500",
        fontSize: 16,
        letterSpacing: 1.5
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 25,
        fontWeight: "300",
    },
});

export default ProductDetailsScreen;