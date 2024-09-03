const { GoogleGenerativeAI } = require("@google/generative-ai");

const config = ()=>{
    const genAI = new GoogleGenerativeAI("AIzaSyD96A7PMIGpNSrNAcjF-pzShHN2UgR02lw");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    return model;
}

module.exports = config;