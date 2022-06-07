import { stringify } from "querystring";
import { IClient } from "../../api/network/client";
import { LoginRequest } from "../../api/network/requests";
import { LoginRespond } from "../../api/network/responds";

function getSPHSession(cookie: string)
{

}

export class Client implements IClient
{
    "SPH-Session": string
    static readonly BASE_URL = "https://start.schulportal.hessen.de/"
    static readonly LOGIN_URL = "https://login.schulportal.hessen.de/"
    constructor(readonly url: string,readonly id: number)
    {

    }
    async login(username: string, password: string): Promise<LoginRespond>
    {
        /*const query_data: LoginRequest.Query = {
            url: this.url,
            skin: "sp",
            i: String(this.id)
        }
        const urlsp = new URLSearchParams({...query_data})
        const form_data: LoginRequest.FormData = {
            url: this.url,
            timezone: "",
            skin: "sp",
            user: username,
            user2: `${this.id}.${username}`,
            password
        }
        const data = stringify({...form_data})
        const cookie_payload = [
            `SPH-Sessionpdata={"_url":"${this.url}"}`,
            "sph-login-upstream=4",
            `schulportal_lastschool=${this.id}`
        ]
        return new Promise((resolve,reject) => {
            const req = request(`${Client.LOGIN_URL}?${urlsp}`,{
                headers: {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*ä/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "cookie": `${cookie_payload.join("; ")}`,
                    "content-type": "application/x-www-form-urlencoded",
                    "content-length": Buffer.byteLength(data),
                    "cache-control": "no-cache",
                    "pragma": "no-cache",
                    "referer": `${Client.LOGIN_URL}?i=${this.id}`
                },
                method: "POST",
                
            })
            console.dir(req.getHeaders())
            var text = ""
            req.write(data)
            req.end()
            req.on("error",reject)
            req.on("response",(res) => {
                console.info(`${res.statusCode}: ${res.statusMessage}`)
                res.on("error",reject)
                res.on("data",(chunk) => text += chunk)
                res.on("end",() => {
                    console.dir(res.headers["set-cookie"])
                    resolve(text)
                })
            })
        })*/
        const urlsp = new URLSearchParams()
        urlsp.set("url",this.url)
        urlsp.set("skin","sp")
        urlsp.set("i",this.id.toString())
        const formdata = new FormData()
        formdata.set("url",this.url)
        formdata.set("timezone","")
        formdata.set("skin","sp")
        formdata.set("user2",username)
        formdata.set("user",`${this.id}.${username}`)
        formdata.set("password",password)

        const res = await fetch(`${Client.LOGIN_URL}?${urlsp}`,
        {
            headers: {
                accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'cache-control': 'no-cache',
                'content-type': 'application/x-www-form-urlencoded',
                pragma: 'no-cache'
            },
            referrer: `${Client.LOGIN_URL}?i=5137`,
            body: formdata,
            method: "POST"
        })
        console.dir(res)
        console.dir([...res.headers.entries()])
        const cookies = res.headers.get("set-cookie")
        console.dir(cookies)
        return {}
    }
}