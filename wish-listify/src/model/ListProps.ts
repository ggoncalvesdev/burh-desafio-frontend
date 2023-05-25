export interface ListProps {
  type: string;
  title: string;
  wishes: ListWishes[];
}

export interface ListWishes {
  name: string;
  description: string;
}