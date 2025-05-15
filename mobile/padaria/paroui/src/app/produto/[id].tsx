import { Text, View, Image, TextInput, Button, ScrollView } from "react-native"
import { styles } from "./styles"
import { Picker } from "@react-native-picker/picker"
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { ProdutoType } from "../home/page";



export default function ProductScreen() {
    const [selectedMassa, setSelectedMassa] = useState(""); // Estado para o valor selecionado

    const { id } = useLocalSearchParams()
    const [produto, setProduto] = useState<ProdutoType>()

    function getProduto() {
        fetch(`http://localhost:3000/produto/${id}`)
            .then((res) => res.json())
            .then(data => setProduto(data))
    }

    useEffect(() => {
        getProduto()
    }, [])

    return (
        <View style={styles.container}>

            <ScrollView style={styles.menuDescription}>

                <Link href="/home/page" asChild>
                    <Text style={styles.menuOption}>Doces</Text>
                </Link>

                <Image style={styles.itemImage} source={produto?.imgUrl} />

                <Text style={styles.titulo}>{produto?.name}</Text>
                <Text style={styles.subtitulo}>{produto?.description}</Text>
                <Text style={styles.preco}>R$ {produto?.price.toFixed(2)}</Text>

                <Image style={styles.imageLinha1} source={require("@/assets/images/linha.png")} />
                <Text style={styles.titulo}>Personalizar</Text>

                <View style={styles.personalizar}>
                    <View style={styles.campos}>
                        <Text style={styles.escolha}>Escolher a massa</Text>
                        <Picker
                            selectedValue={selectedMassa}
                            onValueChange={(itemValue) => setSelectedMassa(itemValue)}
                            style={styles.picker} >
                            <Picker.Item label="Selecionar" value="" />
                            <Picker.Item label="Massa Tradicional" value="tradicional" />
                            <Picker.Item label="Massa amendoada" value="integral" />
                            <Picker.Item label="Massa Sem Glúten" value="sem_gluten" />
                        </Picker>
                    </View>
                    <View style={styles.campos}>
                        <Text style={styles.escolha}>Escolher um recheio</Text>
                        <Picker
                            selectedValue={selectedMassa}
                            onValueChange={(itemValue) => setSelectedMassa(itemValue)}
                            style={styles.picker} >
                            <Picker.Item label="Selecionar" value="" />
                            <Picker.Item label="Chocolate" value="chocolate" />
                            <Picker.Item label="Creme" value="creme" />
                            <Picker.Item label="morango" value="morango" />
                        </Picker>
                    </View>

                    <View style={styles.campos}>
                        <Text style={styles.escolha}>Observações</Text>
                        <TextInput placeholder="Digite sua observação" style={styles.campoObs} />
                    </View>
                </View>

                <View>
                    <Text style={styles.titulo}>Informação nutricional</Text>
                    <View style={styles.alergenicos}>
                        <Text style={styles.escolha}>Alergênicos:</Text>
                        <Text style={styles.subtitulo}>Glúten e lactose</Text>
                    </View>
                    <View style={styles.ingredientes}>
                        <Text style={styles.escolha}>Ingredientes:</Text>
                        <Text style={styles.subtitulo}>{produto?.ingredients}</Text>
                    </View>
                </View>

                <Image style={styles.imageLinha2} source={require("@/assets/images/linha.png")} />

                <TouchableOpacity >
                    <Text style={styles.botaoTexto}>Adicionar ao carrinho</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}