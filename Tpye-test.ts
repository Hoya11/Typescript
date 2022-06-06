//타입스크립트 테스트

// 두개 동일함
let a : number = 1
let b : string = "1"
let c : boolean = true

let d = 1
let e = "2"
let f = true

//
type Player = {
    name:string,
    age?:number
}

const hoya11 : Player = {
    name:"aaa"
}
const hoya22 : Player = {
    name:"bbb",
    age:33
}


// function playerMaker(name:string) : Player{
//     return{
//         name
//     }
// }

//위 함수 변형
const playerMaker = (name:string) :Player =>({name})

const hoya = playerMaker("hoya")
hoya.age = 222


const names: readonly string[]= ["1","2"]
//names.push("11")
