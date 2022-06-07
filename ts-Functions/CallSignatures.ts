//기존방식
// const add = (a:number,b:number)=> a + b

//타입선언해서 쓰는 방식
type Add = (a:number, b:number) => number;

const add:Add = (a, b) => a + b


