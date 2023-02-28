// ---------------Callback. Callback hell------------

// console.log('Start');

// setTimeout(function () {
//     console.log('Print after 2s');
// }, 2000);

// console.log('Finish');

// setTimeout( function () {
//     console.log('Step up');
//     setTimeout( function () {
//         console.log('Step right');
//         setTimeout( function () {
//             console.log('Step left');
//         }, 1000);
//     }, 2000);
// }, 3000);

// function checkRooms () {
//     setTimeout( function () {
//         console.log('Перевіряємо номери у готелі...');
//         const availabelRooms = true;
//         return availabelRooms;
//     }, 1000)
// }

// if (checkRooms()) {
//     console.log('Вільні номери є');
//     console.log('Їдемо у відпустку');
// } else {
//     console.log('Вільних номерів немає');
//     console.log('Відпустка відміняється');
// }

// function checkRooms () {
//     setTimeout( function () {
//         console.log('Перевіряємо номери у готелі...');
//         const availabelRooms = true;

//         if (availabelRooms) {
//             console.log('Вільні номери є');
//             console.log('Їдемо у відпустку');
//         } else {
//             console.log('Вільних номерів немає');
//             console.log('Відпустка відміняється');
//         }
//     }, 1000)
// }

// checkRooms ();

// 1. Перевірити номери у готелі
// 2. Перевірити авіа-білети

// Летимо у відпустку
// Відпустка відміняється

// function checkRooms () {
//     setTimeout ( function () {
//         console.log('Перевіряємо номери у готелі...');
//         const availableRooms = true;

//         if (availableRooms) {
//             success('Вільні номери є');
//         } else {
//             failed('Вільних номерів немає');
//         }
//     }, 1000);
// }

function cancelVacation(message) {
  console.log("--- cancelVacation ---");
  console.log("Відповідь на минулому кроці:", message);
  console.log("Відпустка відміняється");
}

function submitVacation(message) {
  console.log("--- submitVacation ---");
  console.log("Відповідь на минулому кроці:", message);
  console.log("Їдемо у відпустку");
}

// function checkRooms () {
//     setTimeout ( function () {
//         console.log('Перевіряємо номери у готелі...');
//         const availableRooms = true;

//         if (availableRooms) {
//             let message = 'Вільні номери є';
//             submitVacation(message)
//         } else {
//             let message = 'Вільних номерів немає';
//             cancelVacation(message)
//         }
//     }, 1000);
// }

// checkRooms ();

function checkRooms(success, failed) {
  setTimeout(function () {
    console.log("Перевіряємо номери у готелі...");
    const availableRooms = true;

    if (availableRooms) {
      let message = "Вільні номери є";
      success(message);
    } else {
      let message = "Вільних номерів немає";
      failed(message);
    }
  }, 1000);
}

function checkTickets(message, success, failed) {
  setTimeout(function () {
    console.log("--- function checkTickets ---");
    console.log("Відповідь у минулому кроці:", message);

    console.log("Перевіряємо авіабілети...");
    const availableTickets = false;
    //----код, який відправляє запит у авіакомпанію---
    if (availableTickets) {
      let message = "Вільні авіа-білети є";
      success(message);
    } else {
      let message = "Вільних авіа-білетів немає";
      failed(message);
    }
  }, 500);
}

checkRooms(
  function (messageFromCheckRooms) {
    checkTickets(
      messageFromCheckRooms,
      function (messageFromCheckTickets) {
        submitVacation(messageFromCheckTickets);
      },
      function (messageFromCheckTickets) {
        cancelVacation(messageFromCheckTickets);
      }
    );
  },
  function (messageFromCheckRooms) {
    cancelVacation(messageFromCheckRooms);
  }
);
