import { get as httpGet } from 'axios';


export const fetchList = async () => {

    let list;

    try {
        list = (await httpGet('http://localhost:8080/person-list'))?.data ?? []
    } catch(e) {
        list = []
    }

    return list;
}
