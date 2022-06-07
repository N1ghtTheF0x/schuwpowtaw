(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./network/client");
window.addEventListener("load", () => {
    Object.defineProperty(window, "client", { value: new client_1.Client("aHR0cHM6Ly9jb25uZWN0LnNjaHVscG9ydGFsLmhlc3Nlbi5kZS8=", 6302) });
});

},{"./network/client":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
function getSPHSession(cookie) {
}
class Client {
    url;
    id;
    "SPH-Session";
    static BASE_URL = "https://start.schulportal.hessen.de/";
    static LOGIN_URL = "https://login.schulportal.hessen.de/";
    constructor(url, id) {
        this.url = url;
        this.id = id;
    }
    async login(username, password) {
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
        const urlsp = new URLSearchParams();
        urlsp.set("url", this.url);
        urlsp.set("skin", "sp");
        urlsp.set("i", this.id.toString());
        const formdata = new FormData();
        formdata.set("url", this.url);
        formdata.set("timezone", "");
        formdata.set("skin", "sp");
        formdata.set("user2", username);
        formdata.set("user", `${this.id}.${username}`);
        formdata.set("password", password);
        const res = await fetch(`${Client.LOGIN_URL}?${urlsp}`, {
            headers: {
                accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'cache-control': 'no-cache',
                'content-type': 'application/x-www-form-urlencoded',
                pragma: 'no-cache'
            },
            referrer: `${Client.LOGIN_URL}?i=5137`,
            body: formdata,
            method: "POST"
        });
        console.dir(res);
        console.dir([...res.headers.entries()]);
        const cookies = res.headers.get("set-cookie");
        console.dir(cookies);
        return {};
    }
}
exports.Client = Client;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvaW5kZXgudHMiLCJjbGllbnQvbmV0d29yay9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLDZDQUF5QztBQUV6QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFDLEdBQUcsRUFBRTtJQUVoQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxlQUFNLENBQUMsc0RBQXNELEVBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFBO0FBQzNILENBQUMsQ0FBQyxDQUFBOzs7Ozs7QUNBRixTQUFTLGFBQWEsQ0FBQyxNQUFjO0FBR3JDLENBQUM7QUFFRCxNQUFhLE1BQU07SUFLTTtJQUFxQjtJQUgxQyxhQUFhLENBQVE7SUFDckIsTUFBTSxDQUFVLFFBQVEsR0FBRyxzQ0FBc0MsQ0FBQTtJQUNqRSxNQUFNLENBQVUsU0FBUyxHQUFHLHNDQUFzQyxDQUFBO0lBQ2xFLFlBQXFCLEdBQVcsRUFBVSxFQUFVO1FBQS9CLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFRO0lBR3BELENBQUM7SUFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7UUFFMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdESTtRQUNKLE1BQU0sS0FBSyxHQUFHLElBQUksZUFBZSxFQUFFLENBQUE7UUFDbkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUNqQyxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFBO1FBQy9CLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxFQUFFLENBQUMsQ0FBQTtRQUMzQixRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUN6QixRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxRQUFRLENBQUMsQ0FBQTtRQUM5QixRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUM3QyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxRQUFRLENBQUMsQ0FBQTtRQUVqQyxNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLElBQUksS0FBSyxFQUFFLEVBQ3REO1lBQ0ksT0FBTyxFQUFFO2dCQUNMLE1BQU0sRUFBRSx5SUFBeUk7Z0JBQ2pKLGVBQWUsRUFBRSxVQUFVO2dCQUMzQixjQUFjLEVBQUUsbUNBQW1DO2dCQUNuRCxNQUFNLEVBQUUsVUFBVTthQUNyQjtZQUNELFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxTQUFTLFNBQVM7WUFDdEMsSUFBSSxFQUFFLFFBQVE7WUFDZCxNQUFNLEVBQUUsTUFBTTtTQUNqQixDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsT0FBTyxFQUFFLENBQUE7SUFDYixDQUFDOztBQXpGTCx3QkEwRkMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiLi9uZXR3b3JrL2NsaWVudFwiXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpID0+XG57XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdyxcImNsaWVudFwiLHt2YWx1ZTogbmV3IENsaWVudChcImFIUjBjSE02THk5amIyNXVaV04wTG5OamFIVnNjRzl5ZEdGc0xtaGxjM05sYmk1a1pTOD1cIiw2MzAyKX0pXG59KSIsImltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJxdWVyeXN0cmluZ1wiO1xuaW1wb3J0IHsgSUNsaWVudCB9IGZyb20gXCIuLi8uLi9hcGkvbmV0d29yay9jbGllbnRcIjtcbmltcG9ydCB7IExvZ2luUmVxdWVzdCB9IGZyb20gXCIuLi8uLi9hcGkvbmV0d29yay9yZXF1ZXN0c1wiO1xuaW1wb3J0IHsgTG9naW5SZXNwb25kIH0gZnJvbSBcIi4uLy4uL2FwaS9uZXR3b3JrL3Jlc3BvbmRzXCI7XG5cbmZ1bmN0aW9uIGdldFNQSFNlc3Npb24oY29va2llOiBzdHJpbmcpXG57XG5cbn1cblxuZXhwb3J0IGNsYXNzIENsaWVudCBpbXBsZW1lbnRzIElDbGllbnRcbntcbiAgICBcIlNQSC1TZXNzaW9uXCI6IHN0cmluZ1xuICAgIHN0YXRpYyByZWFkb25seSBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9zdGFydC5zY2h1bHBvcnRhbC5oZXNzZW4uZGUvXCJcbiAgICBzdGF0aWMgcmVhZG9ubHkgTE9HSU5fVVJMID0gXCJodHRwczovL2xvZ2luLnNjaHVscG9ydGFsLmhlc3Nlbi5kZS9cIlxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHVybDogc3RyaW5nLHJlYWRvbmx5IGlkOiBudW1iZXIpXG4gICAge1xuXG4gICAgfVxuICAgIGFzeW5jIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPExvZ2luUmVzcG9uZD5cbiAgICB7XG4gICAgICAgIC8qY29uc3QgcXVlcnlfZGF0YTogTG9naW5SZXF1ZXN0LlF1ZXJ5ID0ge1xuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIHNraW46IFwic3BcIixcbiAgICAgICAgICAgIGk6IFN0cmluZyh0aGlzLmlkKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVybHNwID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7Li4ucXVlcnlfZGF0YX0pXG4gICAgICAgIGNvbnN0IGZvcm1fZGF0YTogTG9naW5SZXF1ZXN0LkZvcm1EYXRhID0ge1xuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgIHRpbWV6b25lOiBcIlwiLFxuICAgICAgICAgICAgc2tpbjogXCJzcFwiLFxuICAgICAgICAgICAgdXNlcjogdXNlcm5hbWUsXG4gICAgICAgICAgICB1c2VyMjogYCR7dGhpcy5pZH0uJHt1c2VybmFtZX1gLFxuICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gc3RyaW5naWZ5KHsuLi5mb3JtX2RhdGF9KVxuICAgICAgICBjb25zdCBjb29raWVfcGF5bG9hZCA9IFtcbiAgICAgICAgICAgIGBTUEgtU2Vzc2lvbnBkYXRhPXtcIl91cmxcIjpcIiR7dGhpcy51cmx9XCJ9YCxcbiAgICAgICAgICAgIFwic3BoLWxvZ2luLXVwc3RyZWFtPTRcIixcbiAgICAgICAgICAgIGBzY2h1bHBvcnRhbF9sYXN0c2Nob29sPSR7dGhpcy5pZH1gXG4gICAgICAgIF1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVxID0gcmVxdWVzdChgJHtDbGllbnQuTE9HSU5fVVJMfT8ke3VybHNwfWAse1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJhY2NlcHRcIjogXCJ0ZXh0L2h0bWwsYXBwbGljYXRpb24veGh0bWwreG1sLGFwcGxpY2F0aW9uL3htbDtxPTAuOSxpbWFnZS9hdmlmLGltYWdlL3dlYnAsaW1hZ2UvYXBuZywqw6QvKjtxPTAuOCxhcHBsaWNhdGlvbi9zaWduZWQtZXhjaGFuZ2U7dj1iMztxPTAuOVwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvb2tpZVwiOiBgJHtjb29raWVfcGF5bG9hZC5qb2luKFwiOyBcIil9YCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50LWxlbmd0aFwiOiBCdWZmZXIuYnl0ZUxlbmd0aChkYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgXCJjYWNoZS1jb250cm9sXCI6IFwibm8tY2FjaGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmFnbWFcIjogXCJuby1jYWNoZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlZmVyZXJcIjogYCR7Q2xpZW50LkxPR0lOX1VSTH0/aT0ke3RoaXMuaWR9YFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmRpcihyZXEuZ2V0SGVhZGVycygpKVxuICAgICAgICAgICAgdmFyIHRleHQgPSBcIlwiXG4gICAgICAgICAgICByZXEud3JpdGUoZGF0YSlcbiAgICAgICAgICAgIHJlcS5lbmQoKVxuICAgICAgICAgICAgcmVxLm9uKFwiZXJyb3JcIixyZWplY3QpXG4gICAgICAgICAgICByZXEub24oXCJyZXNwb25zZVwiLChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oYCR7cmVzLnN0YXR1c0NvZGV9OiAke3Jlcy5zdGF0dXNNZXNzYWdlfWApXG4gICAgICAgICAgICAgICAgcmVzLm9uKFwiZXJyb3JcIixyZWplY3QpXG4gICAgICAgICAgICAgICAgcmVzLm9uKFwiZGF0YVwiLChjaHVuaykgPT4gdGV4dCArPSBjaHVuaylcbiAgICAgICAgICAgICAgICByZXMub24oXCJlbmRcIiwoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHJlcy5oZWFkZXJzW1wic2V0LWNvb2tpZVwiXSlcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0ZXh0KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSovXG4gICAgICAgIGNvbnN0IHVybHNwID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gICAgICAgIHVybHNwLnNldChcInVybFwiLHRoaXMudXJsKVxuICAgICAgICB1cmxzcC5zZXQoXCJza2luXCIsXCJzcFwiKVxuICAgICAgICB1cmxzcC5zZXQoXCJpXCIsdGhpcy5pZC50b1N0cmluZygpKVxuICAgICAgICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGZvcm1kYXRhLnNldChcInVybFwiLHRoaXMudXJsKVxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJ0aW1lem9uZVwiLFwiXCIpXG4gICAgICAgIGZvcm1kYXRhLnNldChcInNraW5cIixcInNwXCIpXG4gICAgICAgIGZvcm1kYXRhLnNldChcInVzZXIyXCIsdXNlcm5hbWUpXG4gICAgICAgIGZvcm1kYXRhLnNldChcInVzZXJcIixgJHt0aGlzLmlkfS4ke3VzZXJuYW1lfWApXG4gICAgICAgIGZvcm1kYXRhLnNldChcInBhc3N3b3JkXCIscGFzc3dvcmQpXG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7Q2xpZW50LkxPR0lOX1VSTH0/JHt1cmxzcH1gLFxuICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgYWNjZXB0OiAndGV4dC9odG1sLGFwcGxpY2F0aW9uL3hodG1sK3htbCxhcHBsaWNhdGlvbi94bWw7cT0wLjksaW1hZ2UvYXZpZixpbWFnZS93ZWJwLGltYWdlL2FwbmcsKi8qO3E9MC44LGFwcGxpY2F0aW9uL3NpZ25lZC1leGNoYW5nZTt2PWIzO3E9MC45JyxcbiAgICAgICAgICAgICAgICAnY2FjaGUtY29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgICAgIHByYWdtYTogJ25vLWNhY2hlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZmVycmVyOiBgJHtDbGllbnQuTE9HSU5fVVJMfT9pPTUxMzdgLFxuICAgICAgICAgICAgYm9keTogZm9ybWRhdGEsXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUuZGlyKHJlcylcbiAgICAgICAgY29uc29sZS5kaXIoWy4uLnJlcy5oZWFkZXJzLmVudHJpZXMoKV0pXG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSByZXMuaGVhZGVycy5nZXQoXCJzZXQtY29va2llXCIpXG4gICAgICAgIGNvbnNvbGUuZGlyKGNvb2tpZXMpXG4gICAgICAgIHJldHVybiB7fVxuICAgIH1cbn0iXX0=
