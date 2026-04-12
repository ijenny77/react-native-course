import { StyleSheet,Text,View,Image,useColorScheme } from "react-native";
import {Link} from "expo-router"
import Colors from "../Constants/Colors.js"
function About() {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return(
        <View style={[styles.container,{backgroundColor:theme.background}]}>
            <Text style={[styles.title,{color:theme.title}]}>About page</Text>
            <Link href="/" style={styles.link}>Home page</Link>
             <Link href="/contact" style={styles.link}>Contact Page</Link>
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
    },
    link: {
        marginVertical:10,
        borderBottomWidth:1
    },
})