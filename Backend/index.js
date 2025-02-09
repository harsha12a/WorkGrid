const express = require('express')
const { PORT } = require('./utils/helpers')
const mongoose = require('./config/mongoConfig')
const app = express()

app.use(express.json())

app.use('/user', require('./routes/user.routes'))

app.get('/', (req, res) => {
    res.send('🚀 TeamTrek API is running...')
})


// async function getTasksForUser(userId) {
//   const tasks = await Task.find({ assignedTo: userId }).populate("assignedTo").exec();
//   console.log(tasks);
// }

// getTasksForUser("65d4f0c7a8b3d5f2c1e9b012");


app.listen(PORT, () => {
    console.log(`⚡ Server running on port ${PORT}`)
})