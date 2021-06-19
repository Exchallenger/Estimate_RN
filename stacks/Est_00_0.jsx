import React from 'react';
import styled from 'styled-components/native';
import { NStartBtn } from '../common/button';

const Container = styled.View`
    padding: 40px 12px 0px 12px;
    align-items: center;
    background-color: #f9f9f9;
`;

const Title = styled.Text`
    font-size: 28px;
    font-weight: bold;
    align-self: flex-start;
`;

const Img = styled.Image`
    width:290px;
    height: 243px;
    margin: 9px 0px 71px 0px;
`;

const Btn = styled.TouchableOpacity`
/* background-color: red; */
`;
const Est_00_0 = ({ navigation: { navigate } }) => {
    const onPress = () => {
        navigate("Est_00_1")
    }
    return (
        <Container>
            <Title>
                Tirrilee Estimate {'\n'}
                Program (Beta-Service)
            </Title>
            <Img source={require('../images/service-illust2x.webp')}/>
            <Btn>
            <NStartBtn 
            content="시작하기" start={true} onPress={onPress}/>
            </Btn>
        </Container>
    );
};

export default Est_00_0;