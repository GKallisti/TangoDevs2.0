import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.png'
import Typewriter from 'typewriter-effect';
import { Inicio } from '../../data/constants';
import Bganimado from '../HeroBgAnimation/Bganimado.jsx';

const HeroSection = () => {
    return (
        <div id="Inicio">
            <HeroContainer>
                <HeroBg>
                    <Bganimado />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title> Hola! Nosotros somos <br /> {Inicio.name}</Title>
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
                        <ResumeButton href='#Contact'> Contactanos </ResumeButton>
                     
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