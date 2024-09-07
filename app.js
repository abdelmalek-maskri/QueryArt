const express= require("express")
const { generateMeta, generateImage } = require('./controllers/openaiController')


const app = express();
app.listen(4000, () => {console.log('listening for requests on port 4000 ')})

app.use(express.json())
app.use(express.static('public'))

app.post('/openai/meta', generateMeta)
app.post('/openai/image', generateImage)


