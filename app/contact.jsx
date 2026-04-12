import { StyleSheet } from "react-native";
import {Link} from "expo-router"
import ThemedView from '../Components/ThemedView.jsx'
import ThemedText from '../Components/ThemedText.jsx'
function About() {
    return(
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Contact page</ThemedText>
            <Link href="/" style={styles.link}><ThemedText>Home Page</ThemedText></Link>
            <Link href="/contact" style={styles.link}><ThemedText>About Page</ThemedText></Link>
        </ThemedView>
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
    },
    link: {
        marginVertical:10,
        borderBottomWidth:1
    },
})