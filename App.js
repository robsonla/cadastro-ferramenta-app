import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons"

import Login from './src/screens/Login/';
import CreateUser from './src/screens/CreateUser/';
import Cadastro from "./src/screens/Cadastro";
import CreateFerramenta from './src/screens/CreateFerramenta';
import Logout from './src/screens/Logout';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#1c1c23' }, 
                    headerTintColor: '#edebe8', 
                    headerTitleAlign: 'center' 
                }}
            >
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="CreateUser" component={CreateUser} options={{ title: 'Cadastro de Usuário' }} />
                <Stack.Screen name="CreateFerramenta" component={CreateFerramenta} options={{ title: 'Cadastro de ferramenta' }} />
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Tabs() {
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName;
                    if(route.name == "Lista de ferramentas"){
                        iconName = "queue";
                    }else if(route.name == "Logout"){
                        iconName = "logout";
                    }
                    return <MaterialIcons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: "#edebe8", 
                tabBarInactiveTintColor: "#db9f04", 
                tabBarStyle: {backgroundColor: "#1c1c23"}, 
                headerShow: true,
                headerTintColor: "#edebe8", 
                headerTitleAlign: "center", 
                headerStyle: {backgroundColor: '#1c1c23'} 
            })}
        >
            <Tab.Screen name="Lista de ferramentas" component={Cadastro}/>
            <Tab.Screen name="Logout" component={Logout}/>
        </Tab.Navigator>
    );
}

