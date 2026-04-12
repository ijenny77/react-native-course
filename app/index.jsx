import { StyleSheet,Text,View,Image,useColorScheme } from "react-native";
import logo from "../assets/images/treasure-closed.png"
import {Link} from "expo-router"
import Colors from "../Constants/Colors.js"
function Home(){
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.img}/>
            <Text style={styles.title}>The number 1</Text>
            <Text>Reading List App</Text>
            <Link href="/about" style={styles.link}>About Page</Link>
            <Link href="/contact" style={styles.link}>Contact Page</Link>
        </View>
    )
}
export default Home
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
    img: {
        marginVertical:20,

    },
    link: {
        marginVertical:10,
        borderBottomWidth:1
    },
})