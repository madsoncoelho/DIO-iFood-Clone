import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    padding-top: 40px;
`;

export const Image = styled.Image`
    margin: 20px;
    padding: 80px;
    resize-mode: contain;
    aspect-ratio: 1;
    height: 250px;
`;

export const View = styled.View`
    flex: 2;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    padding: 0 10px 10px 10px;
`;