import {StyleSheet,Text} from 'react-native'
import ThemedView from '../../Components/ThemedView.jsx'
import ThemedText from '../../Components/ThemedText.jsx'
import Spacer from '../../Components/Spacer'
import ThemedButton from '../../Components/ThemedButton.jsx'
import {Link} from 'expo-router'
import Colors from '../../Constants/Colors.js'
function Register() {
    const handleSubmit = () => {

    }
    return(
        <ThemedView style={styles.container}>
            <Spacer/>
            <ThemedText title={true} style={styles.title}>Register for an account</ThemedText>
            <ThemedButton onPress={handleSubmit}>
                <Text style={{color:'#f2f2f2'}}>Register</Text>
            </ThemedButton>
            <Spacer height={100}/>
            <Link href='/login'>
            <ThemedText style={{textAlign:'center'}}>Login instead</ThemedText>
            </Link>
        </ThemedView>
    )
}
export default Register
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