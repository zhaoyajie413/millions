export const setUser=function (data) {
    sessionStorage.setItem("USERINFO",JSON.stringify(data));
}

export const getUser=()=> JSON.parse(sessionStorage.getItem("USERINFO"));

export const setToken=(data)=> sessionStorage.setItem("TOKEN",data);

export const getToken=()=> sessionStorage.getItem("TOKEN");



