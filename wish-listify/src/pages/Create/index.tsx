import { Card } from "../../components/Card";
import { DefaultBody } from "../../components/DefaultBody";
import {
  TopSection,
  WelcomeMessage
} from "./styles";

export const Create = () => {

  return (
    <DefaultBody>
      <TopSection>
        <WelcomeMessage>
          <h2>Seja bem-vindo à página de criação de lista de desejos!</h2>
          <p>Aqui você pode organizar e planejar seus sonhos e objetivos.</p>
          <p>
            Crie uma lista personalizada para cada área da sua vida e adicione
            seus desejos e metas.
          </p>
          <p>
            Dê asas à sua imaginação e deixe seus sonhos se tornarem realidade.
          </p>
          <p>
            Comece agora e dê o primeiro passo em direção a uma vida cheia de
            conquistas e realizações!
          </p>
        </WelcomeMessage>
      </TopSection>
      <Card />
    </DefaultBody>
  );
};
