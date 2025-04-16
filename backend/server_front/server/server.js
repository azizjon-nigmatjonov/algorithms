const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    res.json({"users": ["Johnatan", "Alice", "Jeck"]})
})

app.listen(3000, () => console.log('Server started at port 3000'))