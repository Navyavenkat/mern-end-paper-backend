const express=require('express')
const app=express()
const cors=require('cors')
const weather=require('./weather')
app.get('/',(req,res)=>{
    res.send("homepage")
})
app.use(cors())
app.use('/weather',weather)

app.listen(3500)
// const express = require('express');
// // const axios = require('axios');
// const cors = require('cors');

// const app = express();



// app.use(cors());

// app.get('/api/weather/:city', async (req, res) => {
//   try {
//     const { city } = req.params;
//     const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=3cba5e74adf3dff51d692eac46d71e49&units=metric`);
//     res.json(weatherResponse.data);
//   } catch (error) {
//     res.status(500).json({ error: 'Unable to fetch weather data' });
//   }
// });

// app.listen(3500);
// const express = require('express');
// const app = express();

// app.get('/api/weather', (req, res) => {
//   const weatherData = {
//     temperature: 25,
//     condition: 'Sunny',
//   };
//   res.json(weatherData);
// });

// app.listen(3500, () => {
//   console.log('Server is running on port 5000');
// });
