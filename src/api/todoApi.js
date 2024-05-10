import axios from "axios"


export const API_SERVER_HOST = 'http/localhost:8080'

const prefix = `${API_SERVER_HOST}/api/todo`//백틱을 사용하여 변수를 문자열로 합침 => 템플릿 리터럴

//tno 번호로 데이터 조회
export const getOne = async (tno) => {
    const res = await axios.get(`${prefix}/${tno}`)

    return res.data
}

//리스트 불러오기
export const getList = async (pageParam) => {

    const {page, size} = pageParam

    const res = await axios.get(`${prefix}/list`, {params:{page,size}})

    return res.data

}