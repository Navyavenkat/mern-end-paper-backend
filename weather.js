const express=require('express')
const router=express.Router()

router.get('/',(request,response)=>{
  response.send("Weather");
})
router.get('/new',(request,response)=>{
  response.render('weath/new');
})

router.post('/',(request,response)=>{
  weather.push({name:request.body})
 
  
 
  response.redirect(`weather/${weather.length-1}`)
})

router.get("/:id",(request,response)=>{
// response.send(request.weather.name)
console.log(request.weath.name);
response.send(weather[request.params.id].name)
})
const weather=[
    {
        name:"london",
        temp:288.6,
        feels_like:288.21,
        humdity:51
    },
    {
        name:"Canada",
        temp:379.68,
        feels_like:177.21,
        humdity:60
    },
    {
        name:"Berlin",
        temp:122.6,
        feels_like:298.21,
        humdity:40
    },
    {
        name:"Germany",
        temp:486.6,
        feels_like:288.21,
        humdity:45
    },

]

router.param('id',(request,response,next,id)=>{
  request.weath=weather[id]
  next()
})
module.exports=router;