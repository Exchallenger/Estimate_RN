import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components/native';
import { NStartBtn } from '../common/button';
import { MainText, SubText } from '../common/text';
import { ResContext } from '../Main';
import TypeContext from '../typeContext';

const Container = styled.View`
    padding-top: 101px;
    align-items: center;
`;

const Title = styled(MainText)`
    margin-bottom: 82px;
`;

const Blue = styled(MainText)`
    color:#226bef;
`;

const Sub = styled(SubText)`
    color:#a0a0a0;
    margin-bottom: 105px;;
`;


const Est_04 = ({navigation,route:{params}}) => {
    const onPress = () => navigation.navigate('Est_00_0');
    const types = useContext(TypeContext);

    return (
        <Container>
            <Title>
                수고하셨습니다.{'\n'}
                <Blue>선택프로젝트 :  {types.type}{'\n'}
                견적 가격 :  대략 {params.won}만원{'\n'}
                </Blue>
                입니다.
            </Title>
            <Sub>
                하지만 정확한 견적은 아니에요 :) {'\n'}
                티릴리와 함께 같이 진단해보고 멋진 서비스를 만들어보아요.
            </Sub>
            <NStartBtn 
            start={false}
            onPress={onPress}
            content="다시하기"/>
        </Container>
    );
};

export default Est_04;