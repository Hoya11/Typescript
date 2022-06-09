// Polymorphism (다형성)

// 다형성이란, 여러 타입을 받아들임으로써 여러 형태를 가지는 것을 의미합니다.

type SuperPrint = {
  (arr: T[]): T;
};

const superPrint: SuperPrint = (arr) => {
  return arr[0];
};

const a = superPrint([1, 2, 3]);
const b = superPrint([true, false, true]);
const c = superPrint(["a", "b"]);
const d = superPrint([1, 2, "a", "b", true]);
