import axios from "axios";

export const API_SERVER_HOST = 'http//localhost:8080'

const prefix = `${API_SERVER_HOST}/api/todo`

export const getOne = async(tno)=>{
    const res = await axios.get(`${prefix}/${tno}`)

    return res.data
}

export const getList = async(pageParam)=>{

    const{page, size} = pageParam;//구조 분해 할당 방식으로 인자객체에 {page:1, size:10}이렇개 변수와 동일한 key값을 줘야함

    const res = await axios.get(`${prefix}/list`,{params:{page:page, size:size}})

    return res.data
}