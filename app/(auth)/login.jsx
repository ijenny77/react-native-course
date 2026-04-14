import {StyleSheet,Pressable,Text} from 'react-native'
import ThemedView from '../../Components/ThemedView.jsx'
import ThemedText from '../../Components/ThemedText.jsx'
import Spacer from '../../Components/Spacer'
import {Link} from 'expo-router'
import Colors from '../../Constants/Colors.js'
import ThemedButton from '../../Components/ThemedButton.jsx'
function Login() {
    const handleSubmit = () => {
        
    }
    return(
        <ThemedView style={styles.container}>
            <Spacer/>
            <ThemedText title={true} style={styles.title}>Login into your account</ThemedText>
            <ThemedButton onPress={handleSubmit}>
                <Text style={{color:'#f2f2f2'}}>Login</Text>
            </ThemedButton>
            <Spacer height={100}/>
            <Link href='/register'>
            <ThemedText style={{textAlign:'center'}}>Register instead</ThemedText>
            </Link>
            <Link href='/'>
            <ThemedText style={{textAlign:'center'}}>Home</ThemedText>
            </Link>
        </ThemedView>
    )
}
export default Login
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        textAlign:"center",
        fontSize: 18,
    },
    btn:{
        backgroundColor:Colors.primary,
        padding:15,
        borderRadius:5,
    },
    pressed:{
        opacity:0.8
    }
})