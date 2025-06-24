import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { 
    number: "Podcast sur l'intelligence artificielle ", 
    text: "Dans le cadre de notre travail en BUT3 Informatique, nous avons réalisé un podcast sur l'intelligence artificielle. ",
    youtubeUrl: "https://www.youtube.com/watch?v=iQ1TeGesJKI" // Remplacez par l'ID réel
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Podcast</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
        <BoxNum>{card.number}</BoxNum>
        <BoxText>{card.text}</BoxText>
        <div style={{ marginTop: '16px', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <iframe
            width="400"
            height="225"
            src="https://www.youtube.com/embed/iQ1TeGesJKI"
            title="Podcast vidéo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Box>
      
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
