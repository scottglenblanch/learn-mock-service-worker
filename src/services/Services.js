export const fetchList = async () => {
    return (await fetch('http://localhost:8080/person-list')) ?? []
}
