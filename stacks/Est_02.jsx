import React, { useState } from 'react';
import styled from 'styled-components/native';
import { SmallBtn, StepBtn } from '../common/button';
import { MainText, SubText } from '../common/text';

const Scroll = styled.ScrollView``;

const Container = styled.View`
    padding-top: 40px;
    justify-content: center;

`;

const Title = styled(MainText)`
    margin-bottom: 18px;
`;

const Sub = styled(SubText)`
    color: #a0a0a0;
`;

const MainContainer = styled.View`
    margin-top: 48px;
    padding:32px 0px 60px 0px;
    background-color: #f8fafe;
`;

const Main = styled(MainText)`

`;

const MainSub = styled(SubText)`
    color: #a0a0a0;
    margin:12px 0px 40px 0px;
`;

const BtnContainer = styled.View`
    width:100%;
    align-items: center;
`;

const Margin = styled.View`
    margin: 10px 0px;
`;

const SBtnContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    padding: 39px 0px;
`;

const Est_02 = ({navigation,route:{params}}) => {
    const [check1, setCheck1] =  useState(false);
    const [check2, setCheck2] =  useState(false);
    const [won,setWon] = useState(params.won);

    const onPress = (price) =>{
        if(price ==="기본금액x1"){
            setCheck1(true);
            setCheck2(false);
            setWon(params.won);
        }else{
            setCheck1(false);
            setCheck2(true);
            setWon(params.won*2);
        }
    }

    const onBack = () => navigation.goBack();
    
    const onNext = () =>{
        if(check1===check2){
            alert("둘 중 하나를 선택해주세요!")
            return;
        }
     navigation.navigate('Est_03_1',{won});}
    return (
        <Scroll>
        <Container>
            <Title>2단계, 작업 페이지를 선정해봅시다.</Title>
            <Sub>이전단계에서 설명한 기본금액에 페이지 수를 곱합니다.</Sub>
            <MainContainer>
                <Main>03. 작업하려는 페이지의 양은 어떻게 되나요?</Main>
                <MainSub>혹시 몇 페이지가 나올지에 대해 감이 안잡히시나요? {'\n'}
                        간단한 정보구조도(I.A)를 설계해보시면 {'\n'}
                            선택에 많은 도움이 될꺼에요!
                </MainSub>
                <BtnContainer>
                    <SmallBtn 
                    clicked={check1}
                    onPress={onPress}
                    content="~20P" price="기본금액x1"/>
                    <Margin/>
                    <SmallBtn
                    clicked={check2}
                    onPress={onPress}
                    content="21P~30P" price="기본금액x2"/>
                </BtnContainer>
            </MainContainer>
            <SBtnContainer>
                <StepBtn
                onPress={onBack}
                content="이전 단계"
                kind="previous"
                />
                <StepBtn
                onPress={onNext}
                content="다음 단계"
                kind="next"
                />
            </SBtnContainer>
        </Container>
        </Scroll>
    );
};

export default Est_02;