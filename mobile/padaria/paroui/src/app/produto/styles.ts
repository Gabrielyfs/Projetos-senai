import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#efdcd0",
    },
    menuDescription: {
        flex: 1,
        paddingLeft: 35,
        paddingRight: 35,
        backgroundColor: "#efdcd0",
    },
    menuOption: {
        fontSize: 20,
        color: "#8C4410",
        textTransform: "uppercase",
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 20,
    },
    itemImage: {
        width: 250,
        height: 250,
        borderRadius: 8,
        alignSelf: "center",
        marginBottom: 50,
        marginTop: 50,
    },
    subtitulo: {
        fontSize: 20,
        fontWeight: 300
    },
    preco: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 20,
    },
    imageLinha1: {
        width: "100%",
        height: 50,
        marginTop: 50,
        marginBottom: 50,
        alignSelf: "center",
    },
    imageLinha2: {
        width: "100%",
        height: 50,
        marginTop: 50,
        marginBottom: 50,
        alignSelf: "center",
        transform: [{ rotate: "180deg" }],
    },
    escolha: {
        fontSize: 18,
        fontWeight: 500,
    },
    campoObs: {
        width: "100%",
        height: 50,
        borderRadius: 8,
        backgroundColor: "transparent",
        padding: 10,
        marginTop: 10,
    },
    campos: {
        marginTop: 20,
        marginBottom: 20,
        borderBottomColor: "#8C4410",
        borderBottomWidth: 1,
    },
    picker: {
        
    },
    titulo: {
        color: "#1d130f",
        textTransform: "uppercase",
        fontSize: 20,
        alignSelf: "center",
        fontWeight: "bold",
        marginBottom: 20,
    },
    personalizar: {
        marginTop: 30,
        marginBottom: 70,
    },
    botaoTexto: {
        fontSize: 16,
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
    alergenicos: {
        marginTop: 25,
        marginBottom: 25,
    },
    ingredientes: {
    },
})