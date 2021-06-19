import React from 'react';
import styled from 'styled-components/native';
import { Box, SBox, VBox, XSBox } from './box';
import { MainText, SMainText, SubText } from './text';


// 1단형 기본 버튼

const Basic = styled(Box)`
    padding: 24px 80px 32px;
    background-color: ${props => props.clicked ? '#3a7bf1' : '#ffffff'};
`;

const ContentText = styled(MainText)`
  margin: 0 0 48px;
  color: ${props => props.clicked ? 'white' : '#000000'};
`;
const PriceText = styled(MainText)`
    color: ${props => props.clicked ? 'white' : '#226bef'};
`;

export const BasicBtn = ({content,price,clicked}) =>{
    return(
        <Basic clicked={clicked}>
        <ContentText clicked={clicked}>{content}</ContentText>
        <PriceText clicked={clicked}>{price}</PriceText>
        </Basic>
    )
}

// 1단형 스몰 버튼

const Small = styled(SBox)`
  background-color: ${props => props.clicked ? '#3a7bf1' : '#ffffff'};
`
const SpageText = styled(SMainText)`
    padding-left: 24px;
    color: ${props => props.clicked ? 'white' : '#000000'};
`;

const SpriceText = styled(SMainText)`
    color: ${props => props.clicked ? 'white' : '#226bef'};
    padding-right: 24px;
`;

export const SmallBtn = ({content,price,clicked, onPress}) =>{
    return(
        <Small onPress={() =>onPress(price)} clicked={clicked}>
        <SpageText clicked={clicked}>{content}</SpageText>
        <SpriceText clicked={clicked}>{price}</SpriceText>
        </Small>
    )
}

//2단형 체크박스 버튼

const Check = styled(VBox)`
    width: 90%;
    margin-bottom: 18px;
    padding: 12px 12px 30px 12px;
    background-color: ${props => props.clicked ? '#3a7bf1' : '#ffffff'};
`;
const CheckBox = styled.Image`
    width: 18px;
    height: 18px;
    margin: 0 0 16px 1px;
    align-self: flex-end;
`;

const CMainText = styled(MainText)`
    margin-bottom: 8px;
    color: ${props => props.clicked ? 'white' : '#000000'};
`;

const CSubText = styled(SubText)`
    margin-bottom: 26px;
    color: ${props => props.clicked ? 'white' : '#9e9e9e'};
`;

const CPriceText = styled(MainText)`
    color: ${props => props.clicked ? 'white' : '#226bef'};
`;


export const CheckBtn = ({content,sub,price,clicked,onPress,idx}) =>{
    return(
        <Check 
        clicked={clicked} onPress={() =>onPress(idx)}>
        {clicked ? <CheckBox source={require('../images/checkbox2.webp')} /> :<CheckBox source={require('../images/checkbox1.webp')} />}
        <CMainText clicked={clicked}>{content}</CMainText>
        <CSubText clicked={clicked}>{sub}</CSubText>
        <CPriceText clicked={clicked}>{price}</CPriceText>
      </Check>
    )
}

// 1단형 기본_상세설명 버튼

const DBasic = styled(Box)`
  padding: 24px 58px 32px 58px;
  background-color: ${props => props.clicked ? '#3a7bf1' : '#ffffff'};
`;

const DBMainText = styled(MainText)`
    margin-bottom: 8px;
    color: ${props => props.clicked ? 'white' : '#000000'};
`;

const DBSubText = styled(SubText)`
    margin-bottom: 20px;
    color: ${props => props.clicked ? 'white' : '#9e9e9e'};
`;

const DBPrice = styled(MainText)`
color: ${props => props.clicked ? 'white' : '#226bef'};

`;

export const DBasicBtn = ({content,sub,price,clicked,onPress}) =>{
    return(
        <DBasic clicked={clicked} onPress={() =>onPress(price)}>
        <DBMainText clicked={clicked}>{content}</DBMainText>
        <DBSubText clicked={clicked}>{sub}</DBSubText>
        <DBPrice clicked={clicked}>{price}</DBPrice>
        </DBasic>
    )
}

// 1단형 스몰_체크박스 버튼

const SCheck = styled(SBox)`
      background-color: #ffffff;
      padding: 0px 24px;
      background-color: ${props => props.clicked ? '#3a7bf1' : '#ffffff'};
`;



const SCMainText = styled(SMainText)`
    color: ${props => props.clicked ? 'white' : '#000000'};
    height: 22px;
`;

const FlexBox = styled.View`
    flex-direction: row;
  
`;

const SCheckBox = styled.Image`
    width: 18px;
    height: 18px;
    justify-content: center;
    margin-left: 16px;
`;

const SCPriceText = styled(SMainText)`
    color: ${props => props.clicked ? 'white' : '#226bef'};
`;

export const SCheckBtn = ({content,price,clicked,onPress,idx}) =>{
    return(
        <SCheck clicked={clicked} onPress={() => onPress(idx)}>
        <SCMainText clicked={clicked}>{content}</SCMainText>
        <FlexBox>
            <SCPriceText clicked={clicked}>{price}</SCPriceText>
             {clicked ? <SCheckBox source={require('../images/checkbox2.webp')} /> :<SCheckBox source={require('../images/checkbox1.webp')} />}
        </FlexBox>
        </SCheck>
    )
}

//필요 버튼 시작버튼 or 다시하기버튼

const NStart = styled(SBox)`
      background-color: #ffffff;
      justify-content: center;
      box-shadow: ${props => props.start ? '10px 5px 5px rgba(0,0,0,0.1)' : '0px 3px 7px rgba(34, 107, 239, 0.5)'};
`;


const NSMainText = styled(SMainText)`
    color: #226bef;
`;

export const NStartBtn = ({content,start,onPress}) =>{
    return(
        <NStart start={start} onPress={onPress}>
        <NSMainText>{content}</NSMainText>
        </NStart>
    )
}

//필요버튼 small

const Step = styled(XSBox)`
      box-shadow: ${props => props.kind === "next" ? '0px 3px 7px rgba(34,107,239,0.5)' : '10px 5px 5px rgba(0, 0, 0, 0.1)'};
      background-color: ${props => props.kind === 'price' ? '#3a7bf1' : '#ffffff'};
      
`;

const StepText = styled(SMainText)`
    color: ${props => props.kind ==="price" ? 'white' : '#000000'};
`;

export const StepBtn = ({content,kind,onPress}) =>{
    return(
        <Step kind={kind} onPress={onPress}>
        <StepText kind={kind}>{content}</StepText>
        </Step>
    )
}