import { StyleSheet, View, Image, FlatList, useWindowDimensions, Text, ScrollView, Pressable } from "react-native";
import products from "../data/products";

const ProductDetailsScreen = () => {
    const product = products[0];
    const { width } = useWindowDimensions();
    const addtocart = () => {
            console.warn("added");
                            }



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
                            style={ {
                                width,
                                aspectRatio: 1,
                            } }
                        />


                    ) }
                />
                <View style={ {
                    padding: 20
                } }>
                    {/* Title */ }
                    <Text style={ styles.title }>
                        { product.name }
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
            </ScrollView>

            {/* Add to cart button */ }
            <Pressable style={ styles.button } onPress={addtocart } >
                <Text style={ styles.buttonTxt }>
                    Add to cart
                </Text>
            </Pressable>

            {/* Navigation icon */ }
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
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 50,
        width: '70%',
        alignSelf: 'center',
        borderRadius: 100,
        padding: 20,
        alignItems: 'center',

    },
    buttonTxt: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
        // alignSelf: 'center',

    }

});

export default ProductDetailsScreen;