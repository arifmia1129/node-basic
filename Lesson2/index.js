const fs = require("fs");

// create a file

// fs.writeFile("student.txt", "I am Arif", err => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("success");
//     }
// })


// update a file

// fs.appendFile("student.txt", " I am 21 years old.", err => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("success")
//     }
// })

// read a file

// fs.readFile("student.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data)
//     }
// })


// rename file name

// fs.rename("student.txt", "user.txt", err => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("success");
//     }
// })


// delete a file

// fs.unlink("user.txt", err => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("success");
//     }
// })


// exists file or not

// fs.exists("user.txt", result => {
//     if (result) {
//         console.log("found file")
//     }
//     else {
//         console.log("not found file");
//     }
// })