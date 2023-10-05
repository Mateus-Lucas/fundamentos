import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaA from '../screens/TelaA'
import TelaB from '../screens/TelaB'
import TelaC from '../screens/TelaC'

export default function Router() {

    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="TelaA">
                <Drawer.Screen name="TelaA" component={TelaA} />
                <Drawer.Screen name="TelaB" component={TelaB} />
                <Drawer.Screen name="TelaC" component={TelaC} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

