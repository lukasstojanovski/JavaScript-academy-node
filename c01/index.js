// creating promises
// 1 - reate an enoty function
const pr1 = () => {

};

// 2 - setup the promise return
const pr2 = () => {
    return new Promise();
};  

// 3 - assign the logic function
const pr3 = ()=> {
    return new Promise(() =>{

    });
};

// 4 - set the succes and fail (response and reject)callbacks
const pr4 = () =>{
    return new Primse((succes, fail) =>{
        // your coode goes here
    });
};

// 5 - finalize the function
const pr5 = () =>{
    return new Promise((succes, fail) => {
        let res = a * b;
        if(res > 100 || res <0) {
            return fail('Result out of range');
        }
        return succes(res);
    });
};

pr5(3, 100)
.then(res => {
    console.log(res);
})
.catch(err => {
    console.error(err);
});