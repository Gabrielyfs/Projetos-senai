import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Conta Comigo</Text>
                    <Text style={styles.subtitle}>Estude matemática básica com a gente!</Text>
                </View>

                <Image source={require("../../assets/images/banner.png")} style={styles.headerImage} resizeMode='cover'/>
                <Text style={styles.quizTitle}>Quizzes</Text>

                    <TouchableOpacity style={styles.quizCard}>
                        <View style={styles.iconBox}>
                            <Image source={require("../../assets/images/adicao.png")} style={styles.iconImage} />
                        </View>
                        <View style={styles.quizContent}>
                            <Text style={styles.quizCardTitle}>Adição</Text>
                            <Text style={styles.quizDescription}>Um desafio divertido para treinar sua mente!</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.quizCard}>
                        <View style={styles.iconBox}>
                            <Image source={require("../../assets/images/subtracao.png")} style={styles.iconImage} />
                        </View>
                        <View style={styles.quizContent}>
                            <Text style={styles.quizCardTitle}>Subtração</Text>
                            <Text style={styles.quizDescription}>Descubra o resultado das subtrações</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.quizCard}>
                        <View style={styles.iconBox}>
                            <Image source={require("../../assets/images/mutiplicacao.png")} style={styles.iconImage} />
                        </View>
                        <View style={styles.quizContent}>
                            <Text style={styles.quizCardTitle}>Multiplicação</Text>
                            <Text style={styles.quizDescription}>Resolva as contas e prove que você manda bem!</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.quizCard}>
                        <View style={styles.iconBox}>
                            <Image source={require("../../assets/images/divisao.png")} style={styles.iconImage} />
                        </View>
                        <View style={styles.quizContent}>
                            <Text style={styles.quizCardTitle}>Divisão</Text>
                            <Text style={styles.quizDescription}>Um jeito legal de praticar com diversão!</Text>
                        </View>
                    </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        paddingTop: 15
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },
    subtitle: {
        fontSize: 16,
        color: '#666666'
    },
    headerImage: {
        height: 190,
        borderRadius: 16,
        marginHorizontal: 20,
        marginVertical: 10,
        width: '90%',
    },
    quizTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    container: {
        flex: 1, //Ocupa todo espaço disponível na tela parecido com o height: 100%
    },
    quizCard: {
        borderRadius: 16,
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#f5f5f5',
    },
    iconImage: {
        width: 45,
        height: 45,
    },
    iconBox: {
        width: 70,
        height: 70,
        borderRadius: 8,
        backgroundColor: '#E6D8FA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    quizContent: {
        flex: 1,
        padding: 15,
    },
    quizCardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    quizDescription: {
        fontSize: 14,
        color: '#666',
        flexWrap: 'wrap', //quebra o texto para a linha de baixo caso seja muito grande
    },
})  