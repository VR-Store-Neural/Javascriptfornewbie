// --------------- Promise (обіцянка) ------------

// const myPromise = new Promise ( function ( resolve, reject) {
//     console.log('Promise created');
//     setTimeout ( function () {
//         // -- запит на сервер
//         const response = true;

//         if (response) {
//             let message = "SUCCESS"
//             resolve(message);
//         } else {
//             let message = "FAILED"
//             reject(message);
//         }
//     }, 1000)
// });

// myPromise.then ( function ( data) {
//     console.log('Then 1');
//     console.log(data);
//     return 'data from then 1'
// }).then ( function ( data) {
//     console.log('Then 2');
//     console.log(data);
// }).catch ( function ( data) {
//     console.log('Catch');
//     console.log(data)
// })

// const myPromise = new Promise ( function ( resolve, reject) {
//     console.log('Promise created');
//     setTimeout ( function () {
//         const response = true;

//         if (response) {
//             let message = "SUCCESS"
//             resolve(message);
//         } else {
//             let message = "FAILED"
//             reject(message);
//         }
//     }, 1500)
// });

// myPromise.then ( function ( data) {
//     setTimeout( () => {
//         console.log('Then 1');
//         console.log(data);
//     }, 1000)
// }).then ( function ( data) {
//     setTimeout ( () => {
//         console.log('Then 2');
//     }, 500)
// }).catch ( function ( data) {
//     console.log('Catch');
//     console.log(data)
// })

// myPromise.then ( function ( data) {
//     return new Promise ( function ( resolve, reject) {
//     setTimeout( () => {
//         console.log('Then 1');
//         console.log(data);
//         const response = false;
//         if (response) {
//             resolve('Data from then 1');
//         } else {
//             reject('Data from then 1');
//         }
//     }, 1000)
// })
// }).then ( function ( data) {
//     setTimeout ( () => {
//         console.log('Then 2');
//         console.log(data)
//     }, 500)
// }).catch ( function ( data) {
//     console.log('Catch');
//     console.log(data)
// })

// ------Ланцюг промісів. Декілька промісів з setTimeout--------

// const checkRooms = new Promise ( function ( resolve, reject) {
//     setTimeout (function () {
//         console.log('We check the hotel rooms...');
//         const availableRooms = false;
//         if (availableRooms) {
//             resolve(`There are rooms in hotel`);
//         } else {
//             reject(`There aren't rooms in hotel`);
//         }
//     }, 1500)
// })

// checkRooms.then ( function (data) {
//     console.log('- then 1 -');
//     console.log('The answer in the previous step:', data);
//     console.log('We are going on vacation');
// }).catch( function ( data) {
//     console.log('- catch -')
//     console.log('The answer in the previous step:', data);
//     console.log('Vacation is canceled');
// })

// const checkRooms = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("We check the hotel rooms...");
//     const availableRooms = true;
//     if (availableRooms) {
//       resolve(`There are rooms in hotel`);
//     } else {
//       reject(`There aren't rooms in hotel`);
//     }
//   }, 1500);
// });

// checkRooms
//   .then(function (data) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         console.log("- then 1 -");
//         console.log("The answer in the previous step:", data);
//         console.log("We are checking the plane tickets...");
//         const availableTickets = true;
//         if (availableTickets) {
//           let message = "There are tickets";
//           resolve(message);
//         } else {
//           let message = "There arent tickets";
//           reject(message);
//         }
//       }, 1000);
//     });
//   })
//   .then(function (data) {
//     console.log("- then  2 -");
//     console.log(`The answer in the previous step:`, data);
//     console.log(`We are going on vacation`);
//   })
//   .catch(function (data) {
//     console.log("- catch -");
//     console.log("The answer in the previous step:", data);
//     console.log("Vacation is canceled");
//   });

// ----Обгортаємо... Створюємо відокремлені проміси----

// checkRooms()
//     .then(checkTickets)
//     .then(success)
//     .catch(failed);

// function checkRooms() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("We check the hotel rooms...");
//       const availableRooms = true;
//       if (availableRooms) {
//         resolve(`There are rooms in hotel`);
//       } else {
//         reject(`There aren't rooms in hotel`);
//       }
//     }, 1500);
//   });
// }

// function checkTickets(data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("- then 1 -");
//       console.log("The answer in the previous step:", data);
//       console.log("We are checking the plane tickets...");
//       const availableTickets = false;
//       if (availableTickets) {
//         let message = "There are tickets";
//         resolve(message);
//       } else {
//         let message = "There arent tickets";
//         reject(message);
//       }
//     }, 1000);
//   });
// }

// function success(data) {
//   console.log("- success -");
//   console.log(`The answer in the previous step:`, data);
//   console.log(`We are going on vacation`);
// }

// function failed(data) {
//   console.log("--- failed ---");
//   console.log("The answer in the previous step:", data);
//   console.log("Vacation is canceled");
// }

// ---- Async functions. Асинхронні функції. Використання промісу -----

// function promiseFunction() {
//     return new Promise( function(resolve, reject) {
//         setTimeout(() => {
//             const result = false;
//             if (result) {
//                 resolve('DONE');
//             } else {
//                 reject('FAIL');
//             }
//         }, 500);
//     })
// }

// async function startPromise() {
//     try {
//         const result = await promiseFunction();
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// startPromise();

// ----Several async operations. A series of promices----

function checkRooms() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("We check the hotel rooms...");
      let availableRooms = true;
      if (availableRooms) {
        resolve("There are rooms in hotel");
      } else {
        reject("There arent rooms in hotel");
      }
    }, 1500);
  });
}

function checkTickets(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("- checkTickets -");
      console.log("The answer in the previous step:", data);
      console.log("We are checking the plane tickets...");
      const availableTickets = true;
      if (availableTickets) {
        let message = "There are tickets";
        resolve(message);
      } else {
        let message = "There arent tickets";
        reject(message);
      }
    }, 1000);
  });
}

function submitVacation(data) {
  console.log("- Submit -");
  console.log(`The answer in the previous step:`, data);
  console.log(`We are going on vacation`);
}

function cancelVacation(data) {
  console.log("--- Cancel ---");
  console.log("The answer in the previous step:", data);
  console.log("Vacation is canceled");
}

async function checkVacation() {
    try {
        const roomsResult = await checkRooms();
        const ticketsResult = await checkTickets(roomsResult);
        submitVacation(ticketsResult)
    } catch (err) {
        cancelVacation(err)
    }
}

checkVacation();