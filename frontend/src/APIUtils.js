import axios from "axios";

export default async function fetchApiResponse(endPoint) {
    try {
        const response = await axios.get(`http://localhost:4000/${endPoint}`)
        return response.data
    } catch (err) {
        console.log(err)
    }
}