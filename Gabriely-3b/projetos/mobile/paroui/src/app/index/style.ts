import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        // ocupa todo o espaço disponível
        flex: 1,
        backgroundColor: "#f4eded"
    },
    header: {
        // padding: 16
    },
    headerImage: {
        width: "100%",
        height: 700,
        position: "relative"
    },
    restauranteName: {
        fontSize: 50,
        fontWeight: "bold",
        marginTop: 16,
        position: "absolute",
        color: "#fff",
        fontFamily: "Hammersmith one",
        alignSelf: 'center',
        bottom: '50%'
    }
})