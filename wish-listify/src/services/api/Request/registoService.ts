import { AxiosResponse } from "axios";
import { Api } from "../Api";

export interface RegisterUser {
    id?: number;
    name: string;
    email: string;
    password: string;
}

export function postUser(user: RegisterUser): Promise<AxiosResponse<RegisterUser, any>> {
    let url = `/register`;

    return Api.post(url, user);
}
