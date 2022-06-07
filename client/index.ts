import { Client } from "./network/client"

window.addEventListener("load",() =>
{
    Object.defineProperty(window,"client",{value: new Client("aHR0cHM6Ly9jb25uZWN0LnNjaHVscG9ydGFsLmhlc3Nlbi5kZS8=",6302)})
})