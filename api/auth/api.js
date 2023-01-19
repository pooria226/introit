
const api        = process.env.API;
const envire     = process.env.NODENV;
const localhost  = process.env.LOCALHOST;

exports.APIURL = envire === "DEV" ? localhost : api

