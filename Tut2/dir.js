const fs  = require('fs')

if(!fs.existsSync('./new')){
    s.mkdir('./new' , (err) => {
        if (err) throw err;
            console.log('Directory created')
    })
}

if(fs.existsSync('./new')){
    s.rmdir('./new' , (err) => {
        if (err) throw err;
            console.log('Directory removed')
    })
}