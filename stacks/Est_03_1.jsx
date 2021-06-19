import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components/native';
import { SmallBtn, StepBtn,SCheckBtn } from '../common/button';
import { MainText, SubText } from '../common/text';

const Scroll = styled.ScrollView``;

const Container = styled.View`
    padding-top: 40px;
    justify-content: center;
`;

const BtnCon  = styled.View`
    width:100%;
    align-items: center;
`;

const Title = styled(MainText)`
    margin-bottom: 18px;
`;


const MainContainer = styled.View`
    margin-top: 48px;
    padding:32px 0px 40px 0px;
    background-color: #f8fafe;
`;

const Main = styled(MainText)`

`;

const MainSub = styled(SubText)`
    color: #a0a0a0;
    margin:12px 0px 40px 0px;
`;

const Blue = styled(SubText)`
    color: #226bef;
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

const Est_03_1 = ({navigation,route:{params}}) => {
    const [won,setWon] = useState(params.won);
    const [btn ,setBtn] = useState(
        [
        {content:"GPS(내 주변)" ,price:"200만원",clicked:false,won:200},
        {content:"지도(맵 커스텀)" ,price:"200만원",clicked:false,won:200},
        {content:"카카오톡 푸쉬" ,price:"200만원",clicked:false,won:200},
        {content:"커뮤니티" ,price:"200만원",clicked:false,won:200},
        {content:"공유하기" ,price:"100만원",clicked:false,won:100},
        {content:"유저타입확장" ,price:"200만원",clicked:false,won:200},
        {content:"채팅(실시간)" ,price:"200만원",clicked:false,won:200},
        {content:"필요없어요." ,price:"0원",clicked:false,won:0}
    ]
    );

    const onPress = (idx) =>{
        let sum = 0;
        let change = btn.map((r,index) =>{
            if(idx===7 && idx!==index){ //필요없어요 클릭했을때
                r.clicked=false;
                return r;
            }
            else if(index===7 && index !==idx && r.clicked===true){ //필요없어요가 클릭되어있는 상태에서 다른거 클릭시
                r.clicked = false;
                return r;
            }
            else if(index===idx){
                r.clicked = !r.clicked;
                return r;
            }else{
                return r;
            }
        });
        btn.map(r =>{
            if(idx!==7 && r.clicked){
                sum = sum+r.won;
            }else if(idx===7 && r.clicked){sum = 0;}
        });
        setBtn(change);
        setWon(params.won+sum);
    }

    const onBack = () => navigation.goBack();
    
    const onNext = () => {
        let num = 0;
        btn.map((r,idx) =>{
            if(idx!==7 && r.clicked===false){
                num+=1;
            }
            if(num===8){
                alert("적어도 하나는 선택해 주세요!");
                return null;
            }
            else{
                navigation.navigate('Est_03_2',{won});
            }
        })
        
    }
    return (
        <Scroll>
        <Container>
            <Title>3단계, 기본 기능 외에 꼭 검증하고{'\n'}
            싶은 특별한 기능을 알려주세요.
            </Title>
            <MainContainer>
                <Main>04. 필요한 추가 기능을 선택해보세요!</Main>
                <MainSub>추가 기능을 통해 진행하시는 서비스가{'\n'}
                        좀 더 다채로워 질 수 있어요! {'\n'}
                            어떤 추가 기능이 필요한지 고민해보시고 선택해주세요!{'\n'}
                            <Blue>(중복 선택 가능합니다.)</Blue>
                </MainSub>
                <BtnContainer>
                    {btn.map((r,idx) =><BtnCon key={r.content}>
                    <SCheckBtn
                    clicked={r.clicked}
                    onPress={onPress}
                    content={r.content} 
                    idx={idx}
                    price={r.price}/>
                    <Margin/>
                    </BtnCon>)}
                    
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

export default Est_03_1;