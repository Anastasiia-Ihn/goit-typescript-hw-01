import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}

// Задача 1: Уявімо, що у вас є форма редагування профілю користувача.
// Користувач може вибирати, які поля він хоче оновити.Створіть тип для такої форми на основі існуючого типу User.

// patrial;
// 1
interface User {
  name: string;
  age: number;
  email: string;
}

type UserUpdateForm = Partial<User>;

const update: UserUpdateForm = {
  email: "newemail@example.com",
};

//   Задача 2: У вас є конфігураційний об'єкт з декількома полями.
// Створіть функцію, яка приймає часткові налаштування та повертає повний конфігураційний об'єкт.

interface Config1 {
  host: string;
  port: number;
  protocol: string;
}

function setupConfig(partial: Partial<Config1>): Config1 {
  return {
    host: partial.host || "localhost",
    port: partial.port || 80,
    protocol: partial.protocol || "http",
  };
}

// Readonly<T>

// Задача 1: Ви розробляєте функцію, яка приймає масив чисел і повертає його ж,
//   але ви хочете гарантувати, що функція не змінює вхідний масив.

function doSomethingWithArray(input: ReadonlyArray<number>): number[] {
  // Деякі операції над масивом, але без його зміни
  return Array.from(input);
}

const nums = [1, 2, 3];
doSomethingWithArray(nums);

// Задача 2: Створіть об'єкт конфігурації, який не можна змінювати після його створення.

interface Config {
  apiUrl: string;
  timeout: number;
}

const config: Readonly<Config> = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};
// 3. Pick<T, K>

// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію, яка повертає лише ім'я та електронну пошту користувача.

type User1 = {
  name: string;
  mail: string;
  tel: number;
};

const user: User1 = {
  name: "Alex",
  mail: "ggggg",
  tel: 8899966,
};

type PersonSummary = Pick<User1, "name" | "mail">;

function updateUser(user: User1): PersonSummary {
  return { name: user.name, mail: user.mail };
}
// Задача 2: Ви хочете зберегти тільки певні поля з API-відповіді для відображення в UI.

interface ApiResponse {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

function getApiData(user: ApiResponse): Pick<ApiResponse, "id" | "title"> {
  return { id: user.id, title: user.title };
}
// 4. Record<K, T>

// Задача 1: Ви хочете створити об'єкт, який мапить імена користувачів до їх віку.

const usersAge1: Record<string, number> = {
  Alice: 25,
  Bob: 30,
  Charlie: 35,
};

// Задача 2: Мапа з іменами місяців до кількості днів у них.

const daysInMonth: Record<string, number> = {
  January: 31,
  February: 28,
  March: 31,
};

// 5. Omit<T, K>

// Задача 1: У вас є тип користувача, але ви хочете створити новий тип без поля пароля для відправлення даних на клієнтську сторону.

interface User2 {
  name: string;
  mail: string;
  tel: number;
}

const newUser: Omit<User2, "tel"> = {
  name: "string",
  mail: "str",
};

//Задача 2: Ви хочете створити новий тип на основі API-відповіді, але без дати створення.

type apiWithout = Omit<ApiResponse, "id">;

// Робота з інтерфейсами

// Спроєктуйте інтерфейс для ресторанного меню.
// Він повинен містити поля: назва, ціна, категорія(наприклад, закуска, основна страва, десерт).

interface Menu {
  name: string;
  price: number;
  category: "starter" | "main" | "dessert";
}

// Розробіть функцію, яка приймає список страв і фільтрує їх за категорією.
interface Menu {
  name: string;
  price: number;
  category: "starter" | "main" | "dessert";
}
// Розробіть функцію, яка приймає список страв і фільтрує їх за категорією.
function filterDish(dishes: Menu[]): Menu[] {
  return dishes.filter((dish: Menu) => dish.category === "main");
}
const menu: Menu[] = [
  {
    name: "Fish",
    price: 20,
    category: "main",
  },
  {
    name: "Teramisu",
    price: 20,
    category: "dessert",
  },
];
filterDish(menu);

// ------------

// function filterDish(dishes: Menu[]): Menu[] {
//   let arrDishes: Menu[] = [];

//   dishes.map((dish: Menu) => {
//     if (dish.category === "main") {
//       return arrDishes.push(dish);
//     }
//   });
//   console.log(arrDishes);
//   return arrDishes;
// }

// const menu: Menu[] = [
//   {
//     name: "Fish",
//     price: 20,
//     category: "main",
//   },
//   {
//     name: "Teramisu",
//     price: 20,
//     category: "dessert",
//   },
// ];

filterDish(menu);

// Спроєктуйте інтерфейс для користувача з полями ім'я, email та дата народження.

interface Student {
  name: string;
  email: string;
  age: number;
}

// Після цього створіть функцію, яка перевіряє, чи є користувач повнолітнім.

function usersAge(user: Student): Student | string {
  if (user.age <= 18) {
    return "Sorry";
  }
  return user;
}

// Робота з класами

// Спроєктуйте інтерфейс CarProperties з такими характеристиками, як brand, year та fuelType.

// Створіть клас Car, який реалізує цей інтерфейс і має метод getDetails(), що виводить інформацію про автомобіль.

interface CarProperties {
  brand: string;
  year: number;
  fuelType: "petrol" | "diesel" | "electric";
}
class Car implements CarProperties {
  constructor(
    public brand: string,
    public year: number,
    public fuelType: "petrol" | "diesel" | "electric"
  ) {}

  getDetails() {
    console.log(
      `This is a ${this.year} ${this.brand} that runs on ${this.fuelType}.`
    );
  }
}

// Спроєктуйте інтерфейс StudentData з полями name, studentID та major.

interface StudentData {
  name1: string;
  studentID: number;
  major: string;
}

// Створіть клас Student, який реалізує цей інтерфейс і має метод introduce(), де студент представляється

class Student implements StudentData {
  constructor(
    public name1: "Adam",
    public studentID: 1111,
    public major: "petrol"
  ) {}

  introduce() {
    console.log(
      `I am ${this.name1}  My student ID is ${this.studentID} and I study ${this.major}.`
    );
  }
}
