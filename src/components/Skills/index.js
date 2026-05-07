import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
padding: 100px 0px 0px 0px;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
      padding: 0px 40px;
      font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  margin-top: 30px;
  align-items: stretch;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Skill = styled.div`
  width: 100%;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border-radius: 18px;
  padding: 28px 32px;
  border: 1px solid rgba(64,133,255,0.18);
  box-shadow: 0 6px 30px rgba(3,28,55,0.6);
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const SkillTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
`

const SkillItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary + 90};
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.02);
  border-radius: 12px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 110px;
`

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
`


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills over the last few years.</Desc>
        <SkillsContainer>
                {skills.map((skill, idx) => (
                  <Skill key={idx}>
                    <SkillTitle>{skill.title}</SkillTitle>
                    <SkillList>
                      {skill.skills.map((item, i) => (
                        <SkillItem key={i}>
                          <SkillImage src={item.image}/>
                          {item.name}
                        </SkillItem>
                      ))}
                    </SkillList>
                  </Skill>
                ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills