import styled from 'styled-components'
import React from 'react';
import { FaCode, FaCogs, FaCloud, FaTerminal } from 'react-icons/fa';
import { SiDocker } from 'react-icons/si';
import './Services.css';

const servicesData = [
    {
        icon: <FaCode />,
        title: 'Web Development',
        description: 'Build responsive, fast, and modern websites using cutting-edge technologies and best practices to deliver exceptional digital experiences.'
    },
    {
        icon: <FaCogs />,
        title: 'DevOps & CI/CD',
        description: 'Implement CI/CD pipelines, automate workflows, and streamline deployments for faster, reliable, and cost-effective delivery.'
    },
    {
        icon: <FaCloud />,
        title: 'Cloud & Infrastructure',
        description: 'Design, deploy, and manage scalable cloud solutions using AWS and modern infrastructure practices for high availability and performance.'
    },
    {
        icon: <SiDocker />,
        title: 'Containerization',
        description: 'Containerize applications using Docker and manage consistent environments for seamless development and deployment.'
    },
    {
        icon: <FaTerminal />,
        title: 'Automation & Scripting',
        description: 'Automate tasks, reduce manual effort, and improve efficiency using scripting and Infrastructure as Code (IaC) practices.'
    },
];

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
    padding: 0px 0px;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
        padding: 0px 40px;
    }
`;

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
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 60px 0px 0px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Services = () => {
  return (
    <Container id="services">
        <Wrapper>
            <Title>Services</Title>
            <Desc>Empowering your digital presence with my diverse range of services.</Desc>
            <div className="services-section">
                {servicesData.map((service, index) => (
                <div key={index} className="service">
                    <div className="service-icon">{service.icon}</div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                </div>
                ))}
            </div>
        </Wrapper>
    </Container>
  );
};

export default Services;
