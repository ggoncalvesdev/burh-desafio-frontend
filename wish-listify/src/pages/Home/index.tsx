import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/global";
import { defaultTheme } from "../../styles/themes/default";

import { ContentContainer, GridContainer, Title } from "./styles";
import { List } from "../../components/List";
import { ListProps, ListWishes } from "../../model/ListProps";


export const Home = () => {
  const userWishLists: ListProps[] = [
    {
      type: "Curto Prazo",
      title: "Lista de Desejos de Livros",
      wishes: [
        { name: "Em Busca do Tempo Perdido", description: "Marcel Proust" },
        { name: "Ulysses", description: "James Joyce" },
        { name: "Dom Quixote", description: "Miguel de Cervantes" },
        { name: "O Grande Gatsby ", description: "F. Scott Fitzgerald" },
        { name: "Cem Anos de Solidão", description: "Gabriel García Márquez" },
        { name: "Moby Dick", description: "Herman Melville" },
        { name: "Guerra e Paz", description: "Lev Tolstói" },
        { name: "Lolita", description: "Vladimir Nabokov" },
      ],
    },
    {
      type: "Médio Prazo",
      title: "Lista de Desejos de Eletrônicos",
      wishes: [
        { name: "Em Busca do Tempo Perdido", description: "Marcel Proust" },
        { name: "Ulysses", description: "James Joyce" },
        { name: "Dom Quixote", description: "Miguel de Cervantes" },
        { name: "O Grande Gatsby ", description: "F. Scott Fitzgerald" },
        { name: "Cem Anos de Solidão", description: "Gabriel García Márquez" },
        { name: "Moby Dick", description: "Herman Melville" },
        { name: "Guerra e Paz", description: "Lev Tolstói" },
        { name: "Lolita", description: "Vladimir Nabokov" },
      ],
    },
    {
      type: "Longo Prazo",
      title: "Lista de Desejos de Viagens",
      wishes: [
        { name: "Em Busca do Tempo Perdido", description: "Marcel Proust" },
        { name: "Ulysses", description: "James Joyce" },
        { name: "Dom Quixote", description: "Miguel de Cervantes" },
        { name: "O Grande Gatsby ", description: "F. Scott Fitzgerald" },
        { name: "Cem Anos de Solidão", description: "Gabriel García Márquez" },
        { name: "Moby Dick", description: "Herman Melville" },
        { name: "Guerra e Paz", description: "Lev Tolstói" },
        { name: "Lolita", description: "Vladimir Nabokov" },
      ],
    },
    {
      type: "Médio Prazo",
      title: "Lista de Desejos de Viagens",
      wishes: [
        { name: "Em Busca do Tempo Perdido", description: "Marcel Proust" },
        { name: "Ulysses", description: "James Joyce" },
        { name: "Dom Quixote", description: "Miguel de Cervantes" },
        { name: "O Grande Gatsby ", description: "F. Scott Fitzgerald" },
        { name: "Cem Anos de Solidão", description: "Gabriel García Márquez" },
        { name: "Moby Dick", description: "Herman Melville" },
        { name: "Guerra e Paz", description: "Lev Tolstói" },
        { name: "Lolita", description: "Vladimir Nabokov" },
      ],
    },
    {
      type: "Longo Prazo",
      title: "Lista de Desejos de Viagens",
      wishes: [
        { name: "Em Busca do Tempo Perdido", description: "Marcel Proust" },
        { name: "Ulysses", description: "James Joyce" },
        { name: "Dom Quixote", description: "Miguel de Cervantes" },
        { name: "O Grande Gatsby ", description: "F. Scott Fitzgerald" },
        { name: "Cem Anos de Solidão", description: "Gabriel García Márquez" },
        { name: "Moby Dick", description: "Herman Melville" },
        { name: "Guerra e Paz", description: "Lev Tolstói" },
        { name: "Lolita", description: "Vladimir Nabokov" },
      ],
    },
    {
      type: "Médio Prazo",
      title: "Lista de Desejos de Viagens",
      wishes: [
        { name: "Em Busca do Tempo Perdido", description: "Marcel Proust" },
        { name: "Ulysses", description: "James Joyce" },
        { name: "Dom Quixote", description: "Miguel de Cervantes" },
        { name: "O Grande Gatsby ", description: "F. Scott Fitzgerald" },
        { name: "Cem Anos de Solidão", description: "Gabriel García Márquez" },
        { name: "Moby Dick", description: "Herman Melville" },
        { name: "Guerra e Paz", description: "Lev Tolstói" },
        { name: "Lolita", description: "Vladimir Nabokov" },
      ],
    },
    {
      type: "Curto Prazo",
      title: "Lista de Desejos de Viagens",
      wishes: [
        { name: "Em Busca do Tempo Perdido", description: "Marcel Proust" },
        { name: "Ulysses", description: "James Joyce" },
        { name: "Dom Quixote", description: "Miguel de Cervantes" },
        { name: "O Grande Gatsby ", description: "F. Scott Fitzgerald" },
        { name: "Cem Anos de Solidão", description: "Gabriel García Márquez" },
        { name: "Moby Dick", description: "Herman Melville" },
        { name: "Guerra e Paz", description: "Lev Tolstói" },
        { name: "Lolita", description: "Vladimir Nabokov" },
      ],
    },
  ];

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ContentContainer>
        <Title>Minhas Listas de Desejos</Title>
        <GridContainer>
          {userWishLists.map((wishList, index) => (
            <List
              key={index}
              type={wishList.type}
              title={wishList.title}
              wishes={wishList.wishes.map((wish) => wish )}
            />
          ))}
        </GridContainer>
      </ContentContainer>
    </ThemeProvider>
  );
};
