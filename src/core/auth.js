/**
 * * * * * * * * * * * * * * *
 * author: 马丰彦
 * date: 2021-06-22
 * function: 封装js-cookie
 * * * * * * * * * * * * * * *
 */
import Cookies from "js-cookie";

const Token = "epgms-token";
const UserName = "epgms-username";

export function getToken() {
  return Cookies.get(Token);
}

export function setToken(token) {
  Cookies.set(Token, token);
}

export function removeToken() {
  Cookies.remove(Token);
}

export function getUserName() {
  return Cookies.get(UserName);
}

export function setUserName(username) {
  Cookies.set(UserName, username);
}
