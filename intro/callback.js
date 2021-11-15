/*setTimeout(()=> {//similar to yield(C#)
    console.log("Hello Mocha");
},2000);*/

 /*setInterval(()=> {//reminds me of Unity's update func
    console.log("Belirtilen sürede bir tekrar çalışır.");
 },1000);*/

 /*const sayHi = (cb) =>{
    cb();
 };
 sayHi(()=> {
    console.log("Haweryu");
 });*/
import fetch from "node-fetch"; //data fetched from API
import axios from "axios"; //can replace fetch
/*fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json()).then((users) => console.log(users));//data to json parsing
fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json()).then((users) => { //Fetch into fetch after the fetch has completed
    console.log(users); //fetchception
    fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json()).then((posts) => {
        console.log(posts);
        fetch("https://jsonplaceholder.typicode.com/posts/1").then(data => data.json()).then(post => console.log("Post 1 yüklendi",post));
    });
});//since js is async you have to put it inside to make it sync it literally needs to be fetchception to make it sync
*/

//with async-await we don't need to use fetchception
/*async function getData() {
    const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");//axios returns object then you access to its data
    const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts/1");//since json is gone no need for another await
    console.log("Users loaded",users);
    console.log("Post 1 loaded",post);
}
getData();*/

const getUsers = () => {
    return new Promise(async (resolve,reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/users");//data:users still works
        resolve(data);
    });
};

const getPost = (post_id) => {
    return new Promise(async (resolve,reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/"+post_id);
        resolve(data);
        //reject("Bir sorun oluştu.");
    });
};

/*(async () => {//to print it sequantially
    try{
        const users = await getUsers();
        const post = await getPost(1);
        console.log(users);
        console.log(post);
    }catch(e){
        console.log(e);
    }  
})();*/

Promise.all([getUsers(), getPost(1)])
    .then(console.log)
    .catch(console.log);
