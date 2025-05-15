import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
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
    linha: {
        color:"#5b2b13"
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