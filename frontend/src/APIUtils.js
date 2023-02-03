import axios from "axios";

export default async function fetchApiResponse(endPoint) {
    try {
        const response = await axios.get(`https://react-fun-fact-production.up.railway.app/${endPoint}`)
        return response.data
    } catch (err) {
        console.log(err)
    }
}