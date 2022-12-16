import axios from "axios";
const clienHttp = axios.create(
    {
        baseURL: "https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws",
        timeout: 30000,
    });

export default clienHttp
