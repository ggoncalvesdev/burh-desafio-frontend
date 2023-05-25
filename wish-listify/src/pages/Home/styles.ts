import styled from 'styled-components'

export const ContentContainer = styled.main`
  min-width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme['gray-800']};
`
export const GridContainer = styled.div`
  max-width: 1080px;
  margin: auto;
  display: grid;

  padding: 60px 0;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-gap: 80px;

  img {
    width: 250px;
    max-height: 360px;
    object-fit: contain;
  }

  @media screen and (max-width: 510px) {
    grid-template-columns: repeat(auto-fit, 180px);
    img {
      width: 180px;
    }
  }

  @media (max-width: 510px) {
      justify-self: center;
      grid-gap: 100px;
  }

`
export const Title = styled.h1`
  padding-top: 100px;
  text-align: center;
  color: ${(props) => props.theme.white};
`