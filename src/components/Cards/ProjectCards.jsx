import React, { memo } from 'react'
import styled from 'styled-components'


const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: rgba(1,2,17);
    cursor: pointer;
    border-radius: 25px;
    border: 2px solid ${({ theme }) => theme.white + 20};
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(23, 92, 230, 0.15);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    height: 180px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
`

const ImageEl = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 30};
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    line-height: 1.5;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    gap: 8px;
`
const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: transparent;
    box-shadow: 0 0 8px rgba(0,0,0,0.15);
    border: 2px solid rgba(255,255,255,0.06);
    object-fit: cover;
`
 

const ProjectCards = ({project,setOpenModal}) => {
    return (
            <Card onClick={() => setOpenModal({state: true, project: project})}>
            <ImageWrapper>
                {project.image && <ImageEl src={project.image} alt={project.title || ''} loading="lazy" />}
            </ImageWrapper>
            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            {project.member && project.member.filter(m => m.img && !m.img.includes('placeholder.com')).length > 0 && (
                <Members>
                    {project.member.filter(m => m.img && !m.img.includes('placeholder.com')).map((member) => (
                        <Avatar key={member.github || member.name} src={member.img} loading="lazy" />
                    ))}
                </Members>
            )}
            
        </Card>
    )
}

export default memo(ProjectCards)