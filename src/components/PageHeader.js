import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const HeadContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  overflow: hidden;
  background: azure;
`;

const HeadContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: grid;
  align-items: end;
  grid-template-rows: 1fr 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    '. . .'
    'title . caption';
  z-index: 1;

  &::after {
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    content: '';
    background-image: ${props => `url(${props.photo})`};
    background-size: cover;
    background-position: center;
    opacity: 1;
    z-index: -1;
  }
`;

const PageTitle = styled.header`
  grid-area: title;
  text-transform: lowercase;

  h1, h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: normal;
  }

  h1 span {
    background-color: pink;
  }
`;

const Caption = styled.div`
  grid-area: caption;
  text-align: right;

  p {
    margin: 0;
  }
`;


export default ({photo}) => (
  <HeadContainer>
    <HeadContent photo={photo.url}>
      <PageTitle>
        <h1><span>Jack Reid</span></h1>
        <h2>Web Idiot</h2>
      </PageTitle>
      <Caption>
        <p>
          <Link to={`/trip/${photo.slug}`}>
            {photo.title}
          </Link>
        </p>
      </Caption>
    </HeadContent>
  </HeadContainer>
);
