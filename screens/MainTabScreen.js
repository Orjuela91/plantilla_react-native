import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import SupportScreen from './ProfileScreen';


//MyScreens
import MyScreen from '../myscreens/MyScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const MyScreenStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarColor: '#fbbd3f',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#fbbd3f',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      /> */}
       <Tab.Screen
        name="MyScreen"
        component={MyStackScreen}
        options={{
          tabBarLabel: 'Documentos',
          tabBarColor: '#fbbd3f',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-add" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarColor: '#fbbd3f',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={SupportScreen}
        options={{
          tabBarLabel: 'Soporte',
          tabBarColor: '#fbbd3f',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#fbbd3f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Inicio',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#fbbd3f" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#fbbd3f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#fbbd3f" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
);

const MyStackScreen = ({navigation}) => (
  <MyScreenStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#fbbd3f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <MyScreenStack.Screen name="MyScreen" component={MyScreen} options={{
          title:'Mis Documentos',
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#fbbd3f" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </MyScreenStack.Navigator>
  );