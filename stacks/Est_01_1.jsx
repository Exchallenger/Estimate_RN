import React, { useState } from 'react';
import styled from 'styled-components/native';
import { DBasicBtn, NStartBtn, StepBtn } from '../common/button';
import { MainText, SubText } from '../common/text';

const Scroll = styled.ScrollView``;

const Container = styled.View`
    padding-top: 21px;
    align-items: center;
`;


const Title = styled(MainText)`
    margin-bottom: 18px;
`;

const Sub = styled(SubText)`
    color: #a0a0a0;
`;

const Red = styled(SubText)`
    color:#ff0000;
`;

const MainContainer = styled.View`
    width: 100%;
    margin-top: 33px;
    padding:33px 0px 60px 0px;
    background-color: #f8fafe;
    align-items: center;
`;

const MainSub = styled(SubText)`
    color: #a0a0a0;
    margin:12px 0px 40px 0px;
`;

const Margin = styled.View`
    margin:10px 0px;
`;

const BtnContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    padding: 39px 0px;
`;

const Est_01_1 = ({navigation,route}) => {
    const [check1, setCheck1] =  useState(false);
    const [check2, setCheck2] =  useState(false);
    const [won,setWon] = useState(route.params.won);

    const onPress = (price) =>{
        if(price ==="+50만원"){
            setCheck1(true);
            setCheck2(false);
            setWon(route.params.won + 50);
        }else{
            setCheck1(false);
            setCheck2(true);
            setWon(route.params.won + 100);
        }
    }
    
    const onBack = () => navigation.goBack();
    
    const onNext = () => {
        if(check1===check2){
            alert("둘 중 하나를 선택해주세요!")
            return;
        }navigation.navigate('Est_01_2',{won});}

    return (
        <Scroll>
        <Container>
            <Title>1단계, 먼저 개발범위를 먼저 생각해보아요.</Title>
            <Sub>개발범위로 <Red>기본금액</Red>을 정할 수 있어요</Sub>
            <MainContainer>
                <MainText>01. 상세기획이 되어 있나요?</MainText>
                <MainSub>아직 상세 기획 없이 단순 아이디어만 있어도 걱정하지 마세요! {'\n'}
                    티릴리와 함께 더 멋진 기획을 만들 수 있습니다!
                </MainSub>
                <DBasicBtn
                  clicked={check1}
                  onPress={onPress}
                content="네! 상세 기획이 있어요."
                sub="좋아요! 개발을 위한 기획을 함께 진행해요."
                price="+50만원"
                />
                <Margin/>
                <DBasicBtn 
                  clicked={check2}
                  onPress={onPress}
                content="앗.. 아직 상세 기획이 없어요"
                sub="괜찮아요 :) 티릴리와 함께 서비스를 기획해보아요."
                price="+100만원"
                />
            </MainContainer>
            <BtnContainer>
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
            </BtnContainer>
        </Container>
        </Scroll>
    );
};

export default Est_01_1;