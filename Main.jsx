import React, { createContext, useState } from 'react';
import styled from 'styled-components/native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Est_00_0 from './stacks/Est_00_0';
import Est_00_1 from './stacks/Est_00_1';
import Est_01_1 from './stacks/Est_01_1';
import Est_01_2 from './stacks/Est_01_2';
import Est_02 from './stacks/Est_02';
import Est_03_1 from './stacks/Est_03_1';
import Est_03_2 from './stacks/Est_03_2';
import Est_04 from './stacks/Est_04';
import { width } from './common/tool';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import TypeContext from './typeContext';

const StatusHeight = getStatusBarHeight();

const Container = styled.View`
    padding-top: ${StatusHeight}px;
    height: 100%;
    width: ${width}px;
    background-color: white;
`;

const Bar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding:12px 18px;
`;

const Logo = styled.Image`
    width: 88px;
    height: 24px;
`

const Menu = styled.Image`
    width: 24px;
    height: 24px;
`;

const Stack = createStackNavigator();



const Main = () => {
    const [type,setType] = useState('unknown');
    return (
        <TypeContext.Provider value={{type,setType}}>
        <NavigationContainer>
        <Container>
        <Bar>
        <Logo source={require('./images/header-logo2x.webp')}/>
        <Menu source={require('./images/m-hamburger-bar2x.webp')}/>
        </Bar>
          <Stack.Navigator 
          screenOptions={{headerShown:false}}
          >
              <Stack.Screen name="Est_00_0" component={Est_00_0}/>
              <Stack.Screen name="Est_00_1" component={Est_00_1}/>
              <Stack.Screen name="Est_01_1" component={Est_01_1}/>
              <Stack.Screen name="Est_01_2" component={Est_01_2}/>
              <Stack.Screen name="Est_02" component={Est_02}/>
              <Stack.Screen name="Est_03_1" component={Est_03_1}/>
              <Stack.Screen name="Est_03_2" component={Est_03_2}/>
              <Stack.Screen name="Est_04" component={Est_04}/>
          </Stack.Navigator>
        </Container>
        </NavigationContainer>
        </TypeContext.Provider>
    );
};



export default Main;