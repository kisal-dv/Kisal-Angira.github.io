
import React, { memo } from 'react';
import styled from 'styled-components';

// Glassy Description for iOS look
const Description = styled.div`
    width: 100%;
    font-size: 15px;
    line-height: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
        line-height: 20px;
    }
`;

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;

const Card = styled.div`
    width: 650px;
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
    padding: 20px 28px;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.25);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.3s cubic-bezier(.4,0,.2,1);
    &:hover{
        box-shadow: 0px 4px 32px rgba(31,38,135,0.22);
        transform: translateY(-5px) scale(1.01);
    }
    @media only screen and (max-width: 768px){
        padding: 12px;
        gap: 10px;
        width: 95vw;
        max-width: 340px;
    }
    &:hover ${Document}{
        display: flex;
    }
    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
    }
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const LogoWrapper = styled.div`
    width: 72px;
    height: 72px;
    border-radius: 12px;
    background-color: ${props => props.$dark ? '#0b1220' : '#ffffff'};
    margin-top: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    position: relative;
    overflow: hidden;
    @media only screen and (max-width: 768px){
        width: 56px;
        height: 56px;
    }
`

const LogoImg = styled.img`
    width: 70%;
    height: 70%;
    object-fit: contain;
    display: block;
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`



const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <LogoWrapper $dark={education.img && String(education.img).includes('colombo-uni')}>
                    {education.img && <LogoImg src={education.img} alt={education.school} loading="lazy" />}
                </LogoWrapper>
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    )
}

export default memo(EducationCard)