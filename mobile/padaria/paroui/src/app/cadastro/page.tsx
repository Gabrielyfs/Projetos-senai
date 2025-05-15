import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Text, TextInput, Touchable, View } from "react-native";
import { styles } from "./styles";
import React from "react";

export default function LoginScreen() {
    return (

        <View style={styles.containerLogin}>

            <View style={styles.logo}>
                <Text style={styles.nome}>Par'oui</Text>
                <Text style={styles.linha}>_____________________________________________</Text>
                <Text style={styles.login}>cadastro</Text>
            </View>

            <View style={styles.campos}>
                <View>
                    <Text style={styles.label}>CPF</Text>
                    <TextInput style={styles.input} placeholder="CPF" secureTextEntry></TextInput>
                </View>
                <View>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput style={styles.input} placeholder="Nome" secureTextEntry></TextInput>
                </View>
                <View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} placeholder="Email" secureTextEntry></TextInput>
                </View>
                <View>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry></TextInput>
                </View>
                <View>
                    <Text style={styles.label}>Data de Nascimento</Text>
                    <TextInput style={styles.input} placeholder="Data de Nascimento" secureTextEntry></TextInput>
                </View>
            </View>


            <Link href={"/home/page"} asChild>
                <TouchableOpacity style={{ width: "80%", alignSelf: "center" }}>
                    <Text style={styles.botaoTexto}>Cadastrar</Text>
                </TouchableOpacity>
            </Link>

            </View>
    )
}