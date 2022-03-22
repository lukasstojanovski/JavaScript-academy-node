// const fs = require("fs")

// const fileCopy = (from, to) => {
//     return new Promise((succes, fail) => {
//         fs.copyFile(from, to, err => {
//             if(err) return fail(err);
//             return succes();
//         });
//     });
// };

// (async () => {
//     try {
//         await fileCopy("source.txt", "destination.txt");
//     }catch (err){
//         console.log(err);
//     }
// })();

// // fileCopy('source.txt', 'destination.txt')
// // .then(() => {
// //     console.log("succesfully copied!!")
// // }).catch(err => {
// //     console.log(err)
// // });

// const rename = (oldFile, newFile) => {
//     return new Promise((succes, fail) => {
//         fs.rename(oldFile, newFile, err =>{
//             if(err) return fail(err);
//             return succes()
//         });
//     });
// };

// rename("oldFile.txt", "newFile.txt",)
// .then(() => {
//     console.log("File succesfully renamed")
// }).catch(err => {
//     console.log(err)
// })



// const fileRead = ("source.txt", "utf-8",  err => {
//     return new Promise((succes, fail) => {
//         fs.readFile("source.txt", "utf-8", err =>{
//             if(err) return fail(err);
//             return succes()
//         });
//     });
// });

// fileRead("source.txt")
// .then(() => {
//     console.log("file read")
// }).catch(err => {
//     console.log(err)
// })

const sobiranje = (first, second) => {
    return first + second;
}
let rezultat = sobiranje(5, 5);
console.log(rezultat);
