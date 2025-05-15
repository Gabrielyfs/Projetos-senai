
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#efdcd0",
        color: "#8C4410",
    },
    headerImage: {
        width: "100%",
        height: 700,
        position: "relative"
    },
    restauranteName: {
        fontSize: 50,
        fontWeight: "bold",
        position: "absolute",
        color: "#fff",
        alignSelf: 'center',
        bottom: '50%'
    },
    tabs: {
        flexDirection: "row",
        padding: 18,
        borderBottomColor: "#efdcd0",
        borderBottomWidth: 1,
        justifyContent: "space-evenly",
    },
    tabsName: {
        color: "#8C4410"
    },
    menuList: {
        flex: 1
    },
    menuItem: {
        flexDirection: "row",
        borderBottomColor: "#efdcd0",
        borderBottomWidth: 25,
        padding: 16
    },
    menuContent: {
        flex: 1,
        marginLeft: 16
    },
    itemImage: {
        width: 95,
        height: 95,
        borderRadius: 8
    },
    itemName: {
        fontSize: 16,
        fontWeight: "bold"
    },
    itemDescription: {
        color: "#666",
        marginTop: 4
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 8
    },
    menuTitle: {
        display: "flex",
        alignItems: "center"
    },
    menu: {
        fontSize: 45,
        color: "#8C4410",
        paddingTop: 20
    },
    menuOption: {
        fontSize: 30,
        color: "#8C4410",
        paddingBottom: 50,
    },
    linha: {
        color:"#5b2b13"
    },




    containerLogin: {
        flex: 1,
        backgroundColor: "#efdcd0",
    },
    botaoTexto: {
        fontSize: 18,
        color: "#1d130f",
        fontWeight: 400,
        textAlign: "center",
        textTransform: "uppercase",
        backgroundColor: "#c7ab99",
        padding: 12,
        letterSpacing: 1.5,
        borderRadius: 12,
        marginBottom: 60,
    },
    input: {
        width: "100%",
        height: 50,
        borderRadius: 18,
        backgroundColor: "#fff",
        padding: 10,
        marginTop: 10,
    },
    logo: {
        alignItems: "center",
        marginTop: 50,
        marginBottom: 30,
    },
    nome: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#8C4410",
        textTransform: "uppercase",
        letterSpacing: 2.5,
    },
    login: {
        fontSize: 25,
        color: "#8C4410",
        textTransform: "uppercase",
        fontWeight: 500,
    },
    campos: {
        marginBottom: 50,
        width: "80%",
        alignSelf: "center",
    },
    label: {
        fontSize: 16,
        paddingTop: 18,
    },
})