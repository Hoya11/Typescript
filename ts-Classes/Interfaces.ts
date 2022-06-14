// Static Members
// 클래스에는 static 멤버가 있을 수 있습니다. 이 멤버는 클래스의 특정 인스턴스와 연결되지 않습니다.
// 클래스 생성자 객체 자체를 통해 액세스할 수 있습니다.
// static 멤버는 동일한 public, protected 및 private 과 함께 사용할 수도 있습니다.

// class MyClass {
//   static x = 0;
//   static printX() {
//     console.log(MyClass.x);
//   }
// }
// console.log(MyClass.x);
// MyClass.printX();

// Interfaces
// 객체의 모양을 특정해주기 위해 사용합니다. 여기서는 firstName 및 lastName 필드가 있는 객체를 설명하는 인터페이스를 사용합니다.

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// OOP 를 위한 Typing 은 class 확장을 위해 필수적으로 interface 를 써야 할 것이고,
// Javascript 의 유동적인 Ducktype 을 `고정타입 `으로 선언하기 위해서
// TS 고유의 `type` 키워드를 사용해야 된다고 생각합니다.

// Type Aliases과 Interfaces의 차이점

// Type Aliases과 인터페이스는 매우 유사하며 많은 경우 자유롭게 선택할 수 있습니다.
// 인터페이스의 거의 모든 기능은 type에서 사용할 수 있으며, 주요 차이점은 type을 다시 열어 새 속성을 추가할 수 없는 것입니다. 반면 인터페이스는 항상 확장 가능합니다.

// 결론: 대부분의 경우 개인 취향에 따라 선택 가능
// (인터페이스 사용을 조금 더 추천)
