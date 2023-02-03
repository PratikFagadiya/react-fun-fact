const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 4000

app.use(cors())
app.use(express.json())

app.get('/fun-fact', function (req, res) {

    const funList = ["Was released in 2013", "Was originally created by JORDAN WALKE", "Has well over 100k starts on GitHub", "It is maintained by Facebook", "Power thousands of enterprise apps, including mobile apps", "React is Not A Framework", "React Has a Strong Community", "Virtual DOM is faster than real DOM", "Keep your components small", "React Increase Productivity"]
    const responseList = getMeRandomElements(funList, 5)

    res.status(200).json({
        funList: responseList
    })
})

const getMeRandomElements = function (sourceArray, neededElements) {
    const result = [];
    for (let i = 0; i < neededElements; i++) {
        const item = sourceArray[Math.floor(Math.random() * sourceArray.length)];
        result.push(item);
    }
    return result;
}

app.listen(PORT, () => {
    console.log('Server Running at ', PORT)
})