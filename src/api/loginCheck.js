import axios from "axios"

export const usersInfo = (user,psw) => axios.get("../static/testdata/Users.json");

