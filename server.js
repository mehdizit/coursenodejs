
const express = require ('express') // les autre retoune object mais expres retour function


const app = express()

// express buid on midlewares(ensemble de functions to run)

//if request from client

app.use((req,res,next)=>{

    console.log('welcome from home')

    


})



//app.use(f1,f2,f3,f4)




app.listen(3000, ()=>console.log('server run on port 300'))

///////////course 10
 