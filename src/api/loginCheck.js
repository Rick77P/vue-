import axios from "axios"

export const usersInfo = (user,psw) => axios.get("../static/testdata/Users.json");

// export const usersInfo=(user,psw)=>{
// axios.get("../testdata/Users.json")
// .then((item)=>{
//     console.log(item);
// })
// .catch(()=>{console.log("error");
// });
// };

