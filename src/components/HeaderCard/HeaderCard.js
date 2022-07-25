import React from "react";
import {View, Text, TextInput} from "react-native";
import styles from "./HeaderCard.style";

const HeaderCard = () => {
    const [userInput, onChangeInput] = React.useState(null);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>PATIKASTORE</Text>
            <TextInput
            style={styles.textInput}
            onChangeText={onChangeInput}
            value={userInput}
            placeholder= "Ara..."
            />
        </View>
    );
};

export default HeaderCard;