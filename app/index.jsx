import { StyleSheet,Text,View,Image } from "react-native";
import logo from "../assets/images/treasure-closed.png"
import {Link} from "expo-router"
function Home(){
    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.img}/>
            <Text style={styles.title}>The number 1</Text>
            <Text>Reading List App</Text>
            <Link href="/about">About Page</Link>
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

    }
})