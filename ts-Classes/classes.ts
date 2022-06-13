// [Abstract Class]
// - 다른 클래스가 상속받을 수 있는 클래스
// - 직접 새로운 인스턴스 생성 X

// 주요 코드)
// abstract class User {
// constructor(
// private firstName:string,
// private lastName:string,
// public nickname:string
// ) {

// abstract getNickName():void
// // getFullName() {
// // return `${this.firstName} ${this.lastName}`
// // }
// }

// TIP)
// private를 사용하면 상속받은 클래스 안에서 마저도 this 사용해 접근 불가능
// 그래서 protected를 사용하면 상속받은 클래스 안에서 this 사용해 접근 가능
// 물론 protected로 지정된 것들은 외부에서 사용이 불가능
// 추상클래스 안에 메소드는 적어서는 안되고 call signature만 적어야 함
// 추상클래스 안의 메소드는 결국 구현이 되지 않는다고 나옴

// 접근 가능한 위치
// 구분        선언한 클래스 내        상속받은 클래스 내      인스턴스
// private           O                       X                 X
// protected         O                       O                 X
// public            O                       O                 O
