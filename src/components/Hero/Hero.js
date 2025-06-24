import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bonjour a tous,
        </SectionTitle>
        <SectionText>
        Je suis AINOUZ Slimane, étudiant en 3ème année de BUT INFO, passionné par le developpement informatique et l'analyse de données, j'ai réalisé de nombreux projets aliant passion et curiosité.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/CV_AINOUZ_Slimane.pdf';
        }}>Mon CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
