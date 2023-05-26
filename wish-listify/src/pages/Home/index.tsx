import { DefaultBody } from "../../components/DefaultBody";
import { List } from "../../components/List";
import { ListProps } from "../../model/ListProps";
import { GridContainer, Title } from "./styles";


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
      <DefaultBody>
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
        </DefaultBody>
  );
};
