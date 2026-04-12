import { StyleSheet,Text,View,Image } from "react-native";

function About() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>About page</Text>
        </View>
    );
}
export default About
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
        fontWeight:'bold',
        fontSize:25,
        color:"purple"
    }
})