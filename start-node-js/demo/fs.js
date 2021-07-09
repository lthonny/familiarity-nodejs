// file system
const fs = require('fs')
const path = require('path')


// create dir
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw  err
//     }
//     console.log('Папка создана')
// })


// create file
const filePath = path.join(__dirname, 'test', 'text.txt')
// fs.writeFile(filePath, 'hello node js', err => {
//     if(err) {
//         throw err
//     }
//     console.log('файл создан')
//     fs.appendFile(filePath, '\n hello vasilich', err => {
//         if(err) {
//             throw err
//         }
//         console.log('файл создан')
//     })
// })


fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err) {
        throw err
    }

    console.log(content)

    // const data = Buffer.from(content)
    // console.log(data.toString());
})

