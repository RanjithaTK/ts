let a:number;
let b:boolean;
let c:string;
let d:any;
let e:number[]=[1,2,3];
let f:any[]=[1,true,"a",false]


enum Color{Red=0,Green=1,Blue=2}
let backgroundColor=Color.Blue


let message;
message="abc";
let endsWithc=(<string>message).endsWith("c")
let alternativeWay = (message as string).endsWith("c")