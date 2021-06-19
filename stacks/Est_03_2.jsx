import React, { useState } from 'react';
import styled from 'styled-components/native';
import {  StepBtn, CheckBtn } from '../common/button';
import { MainText, SubText } from '../common/text';

const Scroll = styled.ScrollView``;

const Container = styled.View`
    padding-top: 40px;
    /* justify-content: center; */

`;

const Title = styled(MainText)`
    margin-bottom: 18px;
`;


const MainContainer = styled.View`
    margin-top: 40px;
    padding:32px 0px 40px 0px;
    background-color: #f8fafe;
`;

const Main = styled(MainText)`

`;

const BtnCon = styled.View`
    flex-basis: 50%;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
`;

const MainSub = styled(SubText)`
    color: #a0a0a0;
    margin:12px 0px 40px 0px;
`;


const BtnContainer = styled.View`
    width:100%;
    flex-direction: row;
    flex-wrap: wrap;
`;

const SBtnContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    padding: 39px 0px;
`;

const Est_03_2 = ({navigation,route:{params}}) => {
    const [btn ,setBtn] = useState(
        [
        {content:"서비스 내에서 관리",sub:"관리자권한 부여",price:"100만원",clicked:false,won:100},
        {content:"기본 Admin",sub:"관리자페이지 운영",price:"150만원",clicked:false,won:150},
        {content:"확장 Admin",sub:"관리자페이지+대쉬보드",price:"200만원",clicked:false,won:200},
        {content:"필요없어요",sub:"해당 기능이 필요없어요.",price:"+ 0만원",clicked:false,won:0},
    ]
    );
    const [won,setWon] = useState(params.won);

    const onPress = (idx) =>{
        let change = btn.map((r,index) =>{
            if(index===idx){
                r.clicked = !r.clicked;
                return r;
            }else{
                r.clicked= false;
                return r;
            }
        });
        setBtn(change);
        btn.map(r =>{
            if(r.clicked){
                setWon(params.won+r.won);
            }
        })
    }

    const onBack = () => navigation.goBack();
    
    const onNext = () => {
        let num = 0;
        btn.map((r,idx) =>{
            if(r.clicked ===false){
                num +=1;
            }
        })
        if(num===4){
            alert("적어도 하나는 선택해 주세요!");
            return;
        }
        navigation.navigate('Est_04',{won})};
    return ( 
        <Scroll>
        <Container>
            <Title>3단계, 기본 기능 외에 꼭 검증하고{'\n'}
            싶은 특별한 기능을 알려주세요.
            </Title>
            <MainContainer>
                <Main>05. 관리자 페이지를 선택해 주세요!</Main>
                <MainSub>관지라 페이지는 앱을 관리하기 위해{'\n'}
                        유용하게 사용되는 페이지에요! 직접 DB를 관리하거나 관리가{'\n'}
                            필요 없는게 아니라면 꼭 선택해야 하는 기능이에요!{'\n'}
                </MainSub>
                <BtnContainer>
                    {btn.map((r,idx) =><BtnCon key={r.content}>
                    <CheckBtn 
                    clicked={r.clicked}
                    onPress={onPress}
                    content={r.content} 
                    idx={idx}
                    price={r.price}/>
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

export default Est_03_2;