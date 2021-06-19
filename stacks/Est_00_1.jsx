import React, { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import { DBasicBtn, StepBtn } from '../common/button';
import { MainText } from '../common/text';
import { width } from '../common/tool';
import TypeContext from '../typeContext';

const Container  = styled.View`
    justify-content: center;
    align-items: center;
    width: ${width}px;
    padding:40px 0px 20px 0px;
`;

const Scroll = styled.ScrollView``;

const BtnContainer = styled.View`
    margin: 40px 0px;
    
`;

const SBtnContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 56px;
`;

const Margin = styled.View`
    margin-top: 20px;
`;

const Page = styled.Text`
    font-size: 14px;
    color: #6d6c6c;
    `;




const Est_00_1 = ({navigation}) => {
    const [check1, setCheck1] =  useState(false);
    const [check2, setCheck2] =  useState(false);
    const [won,setWon] = useState(0);
    const [ty,setTy] = useState();
    
    const {setType} = useContext(TypeContext);
    const onWeb = () => setType('Web');
    const onApp = () => setType('App');

    const onPress = (price) =>{
        if(price ==="300만원"){
            setCheck1(true);
            setCheck2(false);
            setWon(300);
            setTy('App');
        }else{
            setWon(400);
            setCheck1(false);
            setCheck2(true);
            setTy('Web')
        }
    }

    const onBack = () => navigation.goBack();
    
    const onNext = () => {
            if(check1===check2){
                alert("둘 중 하나를 선택해주세요!");
                return;
            }
            if(ty==='Web'){
                onWeb();
            }else{
                onApp();
            }
        navigation.navigate('Est_01_1',{won})};

    return (
        <Scroll>
        <Container>
            <MainText>
            0단계, 어떤 서비스를 만들고 싶으신가요
            </MainText>
            <BtnContainer>
            <DBasicBtn
            clicked={check1}
            onPress={onPress}
            content="App 개발" 
            sub="Android & ios"
            price="300만원"/>
            <Margin/>
            <DBasicBtn
            clicked={check2} 
            onPress={onPress}
            content="Web 개발" 
            sub="반응형 웹"
            price="400만원"/>
            </BtnContainer>
            <SBtnContainer>
                <StepBtn onPress={onBack} kind="previous" content="이전 단계"/>
                <StepBtn onPress={onNext} kind="next" content="다음 단계"/>
            </SBtnContainer>
            <Page>1/3</Page>
        </Container>
        </Scroll>
    );
};

export default Est_00_1;