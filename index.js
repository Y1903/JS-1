//  task 1
let firstNumber = prompt("введіть 1 число:");
let secondNumber = prompt("введіть 2 число:");
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);
debugger;
let sum = firstNumber + secondNumber;
if (sum % 5 === 0) {
  alert("Сума кратна 5");
} else {
  alert("Сума не кратна 5");
}

// // task 2
let getSquareArea = (x) => x * x;
console.log(getSquareArea(9));

// task 3
function getMenu() {
  let userOpion = prompt(
    "Виберіть напій: \n 1 - Чай\n 2 - Кава\n 3 - Сік\n 4 - Вода"
  );
  switch (userOpion) {
    case "1": {
      alert("Ви обрали чай");
      break;
    }
    case "2": {
      alert("Ви обрали каву");
      break;
    }
    case "3": {
      alert("Ви обрали сік");
      break;
    }
    case "4": {
      alert("Ви обрали воду");
      break;
    }
    default: {
      alert("Такого напою немає");
    }
  }
}

// task 4
let purchaseAmound = Number(prompt("Введіть суму покупки:"));

let discount = purchaseAmound > 500 ? 0.03 : purchaseAmound > 800 ? 0.05 : 0;
let finalAmound = purchaseAmound - purchaseAmound * discount;
alert(" Остаточна сума покупки " + finalAmound + " грн.");

// // task 5
function divNum(a, b) {
  if (a % b === 0) {
    return true;
  } else {
    return false;
  }
}
