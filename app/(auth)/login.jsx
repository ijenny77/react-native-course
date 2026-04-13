import {StyleSheet} from 'react-native'
import ThemedView from '../../Components/ThemedView.jsx'
import ThemedText from '../../Components/ThemedText.jsx'
import Spacer from '../../Components/Spacer'
import {Link} from 'expo-router'
function Login() {
    return(
        <ThemedView style={styles.container}>
            <Spacer/>
            <ThemedText title={true} style={styles.title}>Login into your account</ThemedText>
            <Spacer height={100}/>
            <Link href='/register'>
            <ThemedText style={{textAlign:'center'}}>Register instead</ThemedText>
            </Link>
        </ThemedView>
    )
}
export default Login
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center'
    },
    title: {
        textAlign:"center",
        fontSize: 18,
    }
})