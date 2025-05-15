import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Text, TextInput, Touchable, View } from "react-native";
import { styles } from "./home/styles";
import React from "react";

export default function LoginScreen() {
    return (

        <View style={styles.containerLogin}>

            <View style={styles.logo}>
                <Text style={styles.nome}>Par'oui</Text>
                <Text style={styles.linha}>_____________________________________________</Text>
                <Text style={styles.login}>login</Text>
            </View>

            <View style={styles.campos}>
                <View>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput style={styles.input} placeholder="Email"></TextInput>
                </View>
                <View>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry></TextInput>
                </View>
                <Text style={styles.label}>Esqueci minha senha</Text>
            </View>


            <TouchableOpacity style={{ width: "80%", alignSelf: "center" }}>
                <Link href={"/home/page"} asChild>
                    <Text style={styles.botaoTexto}>Entrar</Text>
                </Link>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Link href={"/cadastro/page"}>
                <Text style={{ textTransform: "uppercase" }}>Não tem login?  </Text>
                <Text style={{ color: "#4e230e", textTransform: "uppercase", fontWeight: 500 }}>Cadastre-se</Text>
                </Link>
            </View>
            </View>
    )
}