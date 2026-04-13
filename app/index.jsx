import { StyleSheet,Text} from "react-native";
import {Link} from "expo-router"
import ThemedView from '../Components/ThemedView.jsx'
import ThemedLogo from "../Components/ThemedLogo.jsx";
import Spacer from '../Components/Spacer.jsx'
import ThemedText from '../Components/ThemedText.jsx'
function Home(){
    return(
        <ThemedView style={styles.container}>
            <ThemedLogo/>
            <Spacer height={20}/>
            <ThemedText style={styles.title} title={true}>The number 1</ThemedText>
            <Spacer height={10}/>
            <ThemedText>Reading List App</ThemedText>
            <Spacer/>
            <Link href="/about" style={styles.link}>
            <ThemedText>About Page</ThemedText>
            </Link>
            <Link href="/contact" style={styles.link}><ThemedText>Contact Page</ThemedText></Link>
            <Link href="/login" style={styles.link}><ThemedText>Login Page</ThemedText></Link>
            <Link href="/register" style={styles.link}><ThemedText>Register Page</ThemedText></Link>
        </ThemedView>
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
    },
    link: {
        marginVertical:10,
        borderBottomWidth:1
    },
})