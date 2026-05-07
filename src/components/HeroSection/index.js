
import React, { useEffect, useRef, useState } from 'react';
import { HeroContainer, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton, SocialMediaIcon, SocialMediaIcons, PreTitle } from './HeroStyle';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';
import HeroImg from '../../images/Profile.png';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    // Fake view counter logic
    const [views, setViews] = useState(() => {
        // Start at a random number between 1000 and 3000
        return Math.floor(Math.random() * 2000) + 1000;
    });
    const intervalRef = useRef();

    useEffect(() => {
        // 20 views per hour = 1 view every 3 minutes (180,000 ms)
        intervalRef.current = setInterval(() => {
            setViews(v => v + 1);
        }, 180000);
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div id="about">
            <HeroContainer>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <PreTitle>WELCOME TO MY PORTFOLIO.</PreTitle>
                        <Title>{Bio.name}</Title>
                        <TextLoop>
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <SocialMediaIcons>
                            <SocialMediaIcon href={Bio.linkedin} target="display"><FaLinkedin /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.behance} target="display"><FaBehance /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.dribble} target="display"><FaDribbble /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.facebook} target="display"><FaFacebook /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.twitter} target="display"><FaTwitter /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.insta} target="display"><FaInstagram /></SocialMediaIcon>
                        </SocialMediaIcons>
                        <ResumeButton href={Bio.resume} target='display'>Download CV</ResumeButton>
                        <div style={{marginTop: 16, display: 'flex', alignItems: 'center', gap: 8}}>
                            <span style={{fontWeight: 500, color: '#fff', fontSize: 15, background: 'rgba(0,0,0,0.35)', borderRadius: 8, padding: '4px 12px', boxShadow: '0 2px 8px rgba(0,0,0,0.10)'}}>👁️ {views.toLocaleString()} views</span>
                        </div>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection