"use strict";

let pin = prompt("Введите ПИН-код из четырёх или шести целых положительных цифр. Валидный ПИН отдаст в консоль 'true', а иной - 'false.'");

function validatePIN (pin) {
    
    if (pin != pin.trim()) {
    return (false);
    } else {
      if (pin.length === 4 || pin.length === 6) {
          for (let i = 0; i < pin.length; i++) {
              if (isNaN(pin[i])) {
                  return (false);
              } else {
                  if (i === pin.length - 1) {
                      return (true);
                  }
              }
          }
      } else {
          return (false);
      }
    }
}

console.log(validatePIN(pin));