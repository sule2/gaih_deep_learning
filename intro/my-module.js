export default (name) => { //no name needed for default
    console.log(`hello ${name}`);//console.log("hello " + name) also for ` altGr + ;
};
const topla = (a,b) => a+b; //oneline function
const cikar = (a,b) => a-b;

const text = 'Text lorem ipsum';
const user = {
    name:"Kristen",
    surname:"Stewart"
};
const users = [{
    name:"Megan",
    surname:"Fox"
},{
    name:"Ruby",
    surname:"Rose"
}];

export {topla,cikar,text,user,users}; //export multiple funcs