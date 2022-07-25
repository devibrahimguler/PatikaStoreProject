import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#ECEFF1",
        margin: 10,
        padding: 8,
        borderRadius: 10,
    },
    inner_container: {
        flex: 1,
        justifyContent: "flex-end"
    },
    image_container: {
        backgroundColor: "white",
        borderRadius: 10,
    },
    image:{
        height: Dimensions.get("window").height / 5,
        resizeMode: "center",
    },
    title:{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        marginTop: 5,
    },
    description:{
        color: "#808080",
    },
    stock:{
        color: "red",
        fontWeight: "bold",
    },
});