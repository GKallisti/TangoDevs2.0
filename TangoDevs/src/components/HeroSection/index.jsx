import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.png'
import Typewriter from 'typewriter-effect';
import { Inicio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="Inicio">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hola! Nosotros somos <br /> {Inicio.name}</Title>
                        <TextLoop>
                            
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Inicio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Inicio.description}</SubTitle>
                        <ResumeButton href='#Aboutus'> Mira nuestros trabajos: </ResumeButton>
                     
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