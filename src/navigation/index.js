//IMPORT NAVIGATION LIBS
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

//IMPORT ICONS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//IMPORT SCREENS
import Dashboard from '../screens/dashboard';
import Favorites from '../screens/favorites';
import Gifts from '../screens/gifts';
import Profile from '../screens/profile';
import Test from '../screens/dashboard/Test';

//CREATE STACKS
const DashboardStackNavitator = createNativeStackNavigator();
export const DashboardStack = () => {
    return (
        <DashboardStackNavitator.Navigator>
            <DashboardStackNavitator.Screen name="Dashboard" component={Dashboard} />
            <DashboardStackNavitator.Screen name="Test" component={Test} />
        </DashboardStackNavitator.Navigator>
    );
};

//CREATE TABS
const AppTab = createMaterialBottomTabNavigator();
export const Tabs = () => {
    return (
        <AppTab.Navigator>
            <AppTab.Screen name="dashboardTab" component={DashboardStack} 
            options ={{tabBarLabel: 'Dashboard', tabBarIcon: () => (<MaterialCommunityIcons name='view-grid' size= {28}/>)}}/>
            <AppTab.Screen name="favoritesTab" component={Favorites}
            options ={{tabBarLabel: 'Favorites', tabBarIcon: () => (<MaterialCommunityIcons name='heart' size= {28}/>)}}/>
            <AppTab.Screen name="giftsTab" component={Gifts}
            options ={{tabBarLabel: 'Gifts', tabBarIcon: () => (<MaterialCommunityIcons name='gift' size= {28}/>)}}/>
            <AppTab.Screen name="profileTab" component={Profile}
            options ={{tabBarLabel: 'Profile', tabBarIcon: () => (<MaterialCommunityIcons name='account' size= {28}/>)}}/>
        </AppTab.Navigator>
    )
}