let calculator = {
  read(a,b){
    calculator['readValuesA'] = a;
    calculator['readValuesB'] = b;
  },
  sum(){
    return Number(calculator['readValuesA']) + Number(calculator['readValuesB']);
  },
  mul(){
    return Number(calculator['readValuesA']) * Number(calculator['readValuesB']);
  }

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
