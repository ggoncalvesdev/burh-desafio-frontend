import { AxiosResponse } from "axios";
import { Api } from "../Api";

export interface RegisterList {
    storedEmail: string;
    newList: string;
    prazoSelecionado: string;
    wishList: ListWishes[];
  }
  
  export interface ListWishes {
    wish: string;
    description: string;
  }

export function postList(list: RegisterList): Promise<AxiosResponse<RegisterList, any>> {
    let url = `/list`;

    return Api.post(url, list);
}