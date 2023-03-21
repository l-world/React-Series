import request from './request';
import isBrowser from '../utils/isBrowser';
const auth = "authorization";

function setTtem(key,value){
    if(isBrowser()){
        localStorage.setItem(key,value);
    }
}

function removeItem(key){
    if(isBrowser()){
        localStorage.removeItem(key);
    }
}

function getItem(key){
    if(isBrowser()){
        return localStorage.getItem(key);
    }
}

export async function login(loginId,loginPwd){
    const resp = await request.post("/api/user/login",{
        loginId,
        loginPwd
    })

    if( resp.data.code === 0){
        // 登录成功
        // console.log(resp);
        const token = resp.headers[auth];
        setTtem('token', token);
    }else{
        // 登陆失败，清空token
        removeItem("token")
    }
    return resp.data;
}

// 第二次登录身份验证
export async function whoAmI(){
    const token = getItem("token");
    // 本地没有token
    if(!token){
        return {
            code:0,
            message:"",
            data:null
        }
    }
    
    const resp = await request.get("/api/user/whoami",{
        headers:{
            [auth]:token
        }
    })
    // token验证失败，清空本地token
    if(!resp.data.data){
        removeItem("token");
    }
    return resp.data;
}

export function loginOut(){
    removeItem("token");
}