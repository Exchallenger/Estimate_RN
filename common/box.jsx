import styled from 'styled-components/native';

export const Box = styled.TouchableOpacity`
    width: 350px;
    height: 158px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    box-shadow: 10px 5px 5px rgba(0,0,0,0.1);
`;

export const SBox = styled.TouchableOpacity`
    width: 350px;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    box-shadow: 10px 5px 5px rgba(0,0,0,0.1);
`;

export const VBox = styled.TouchableOpacity`
    height: 184px;
    /* justify-content: center; */
    /* align-items: center; */
    border-radius: 4px;
    box-shadow: 10px 5px 5px rgba(0,0,0,0.1);
`

export const XSBox = styled.TouchableOpacity`
    width: 167px;
    height: 48px;
    border: solid 1px #e0e0e0;
    background-color: #ffffff;
    box-shadow: 10px 5px 5px rgba(0,0,0,0.1);
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;