import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({ product }) => {
    return (
        <View style={styles.container}>
            <View style={styles.image_container}>
                <Image style={styles.image} source={{ uri: product.imgURL }} />
            </View>
            <Text style={styles.title}>{product.title}</Text>
            <View style={styles.inner_container}>
                <Text style={styles.description}>{product.price}</Text>
                {!product.inStock ? <Text style={styles.stock}>STOKTA YOK</Text> : null}
            </View>
        </View>
    );
};

export default ProductCard;