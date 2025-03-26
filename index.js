const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'Hello, CI/CD World!' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = app
