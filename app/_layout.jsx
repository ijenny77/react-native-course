import { Slot, Stack } from "expo-router";
import { StyleSheet,Text,View,Image, useColorScheme } from "react-native";
import Colors from "../Constants/Colors.js"
import { StatusBar } from "expo-status-bar";
function RootLayout() {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return( 
        <>
            <StatusBar value="auto"/>
            <Stack screenOptions={{
                headerStyle:{
                    backgroundColor: theme.navBackground,
                },
                headerTintColor: theme.title
            }}>
                <Stack.Screen name="index" options={{title:'Home'}}/>
                <Stack.Screen name="about" options={{title:'About'}}/>
                <Stack.Screen name="contact" options={{title:'Contact', }}/>
            </Stack>
        </>
    );
}
export default RootLayout
const styles = StyleSheet.create({})


// headerShown:false  //This  is for making the stack disappear