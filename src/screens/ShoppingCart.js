import { FlatList, StyleSheet, View, Text, Pressable } from 'react-native';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';

const ShoppingCartTotals = () => (
    <View style={ styles.totalC }>
        <View style={ styles.row }>
            <Text style={ styles.text }>
                Subtotal
            </Text>
            <Text style={ styles.text }>
                $400,000
            </Text>
        </View>
        <View style={ styles.row }>
            <Text style={ styles.text }>
                Delvery
            </Text>
            <Text style={ styles.text }>
                $12,000
            </Text>
        </View>
        <View style={ styles.row }>
            <Text style={ styles.textBold }>
                Total
            </Text>
            <Text style={ styles.textBold }>
                $512,000
            </Text>
        </View>
    </View>
)

const ShoppingCart = () => {
    return (
        <>
            <FlatList
                data={ cart }
                renderItem={ ({ item }) => <CartListItem cartItem={ item } /> }
                ListFooterComponent={
                    ShoppingCartTotals
                }
            />
            <Pressable style={ styles.button } >
                <Text style={ styles.buttonTxt }>
                    Checkout
                </Text>
            </Pressable>
        </>
    );
};

const styles = StyleSheet.create({
    totalC: {
        margin: 20,
        paddingTop: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1,
    },
    row: {
        marginVertical: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        color: 'gray'
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500',
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
})
export default ShoppingCart;
