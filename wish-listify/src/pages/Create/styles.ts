import styled from "styled-components";

export const TopSection = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

export const WelcomeMessage = styled.div`
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.white};

  h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;

    @media (max-width: 930px) {
      text-align: center;
    }
  }

  p {
    font-size: 22px;
    margin-bottom: 10px;

    @media (max-width: 930px) {
      text-align: center;
    }
  }
`;