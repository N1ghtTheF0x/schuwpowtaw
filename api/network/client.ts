import { LoginRespond } from "./responds"

export interface IClient
{
    readonly url: string
    readonly id: number
    login(username: string,password: string): Promise<LoginRespond>
}