import { Image, ImageSourcePropType, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles"
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";

export type ProdutoType = { 
    id: number,
    name: string,
    price: number,
    description: string,
    imgUrl: ImageSourcePropType
    ingredients: string
}

export default function Index() {
    const [produtos, setProdutos] = useState<ProdutoType[]>()

    function fetchProdutos() {
        fetch("http://localhost:3000/produto")
            .then((response) => response.json())
            .then(data => setProdutos(data))
    }

    useEffect(() => {
        fetchProdutos()
    }, [])

    // const MENU = [
    //     {
    //         id: 1,
    //         name: "ECLAIR",
    //         description: "Massa de farinha de trigo, recheada e cobertura de chocolate.",
    //         price: 10.00,
    //         image: require("@/assets/images/eclair.jpg") // Falta a extensão da img
    //     },
    //     {
    //         id: 2,
    //         name: "PROFITEROLE",
    //         description: "Massa açucarada (choux) recheada com cremes, sorvetes e caldas.",
    //         price: 2.50,
    //         image: require("@/assets/images/profiterole.jpg")
    //     },
    //     {
    //         id: 3,
    //         name: "MACARON",
    //         description: "Farinha de amêndoas, com base de claras, açúcar e recheado",
    //         price: 1.99,
    //         image: require("@/assets/images/macaron.jpg")
    //     },
    //     {
    //         id: 4,
    //         name: "OPERA CAKE",
    //         description: "Bolo feito com camadas de pão de ló de amêndoa, ganache, café, creme de manteiga e coberto com chocolate.",
    //         price: 16.50,
    //         image: require("@/assets/images/opera.jpg")
    //     },
    //     {
    //         id: 5,
    //         name: "CHEESECAKE",
    //         description: "Torta feita à base de biscoito e creme de queijo, montada em camadas.",
    //         price: 14.50,
    //         image: require("@/assets/images/cheesecake.jpg")
    //     },
    //     {
    //         id: 6,
    //         name: "TARTELETE",
    //         description: "Minitorta feita com massa sucrêe, com o recheio de sua escolha.",
    //         price: 9.50,
    //         image: require("@/assets/images/tartelete.jpg")
    //     }
    // ]


    return (
        <View style={styles.container}>

            <ScrollView style={styles.menuList}>
                <View>
                    <Image style={styles.headerImage} source={require("@/assets/images/padaria.jpg")} />
                    <Text style={styles.restauranteName}>PAR'OUI</Text>
                </View>

                <View style={styles.tabs}>
                    {["DOCES", "SALGADOS", "BEBIDAS", "BRUNCH"].map((item) => (
                        <TouchableOpacity>
                            <Text style={styles.tabsName}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.menuTitle}>
                    <Text style={styles.menu}>MENU</Text>
                    <Text style={styles.linha}>_____________________________________________</Text>
                    <Text style={styles.menuOption}>DOCES</Text>
                </View>

                {
                    produtos?.map((item) => (
                        <Link href={`/produto/${item.id}`} asChild>
                            <TouchableOpacity style={styles.menuItem}>
                                <Image source={item.imgUrl} style={styles.itemImage} />
                                <View style={styles.menuContent}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemDescription}>{item.description}</Text>
                                    <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                                </View>
                            </TouchableOpacity>
                        </Link>
                    ))

                }
            </ScrollView>
        </View>

    )
}