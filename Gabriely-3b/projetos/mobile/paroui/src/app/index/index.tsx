import { Image, Text, View } from "react-native";
import { styles } from "./style"

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("../assets/images/padaria.jpg")} />
            <Text style={styles.restauranteName}>PAR'OUI</Text>
            </View>
        </View>

    )
}

