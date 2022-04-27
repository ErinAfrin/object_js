const obj ={
    name : "Erin",
    roll : 143548,
    department : "computer",
    semester : "6th",
    num1 : 120,
    num2 : 280,
    shift : function stu(){
        console.log(this.name)
        console.log("stu shift")
    },
    sum : function sumation(){
        console.log(this.semester)
        console.log(this.num1 + this.num2)
        console.log(5+5)
    },
}
// console.log(obj.department);
// console.log(obj["roll"]);
// console.log(obj.shift());
// console.log(obj.sum());


const erin_info ={};
erin_info.name = "Erin Afrin";
erin_info.roll = "143548";
erin_info.collage = "DMPI";
erin_info.address = "Dhaka";

console.log(erin_info)