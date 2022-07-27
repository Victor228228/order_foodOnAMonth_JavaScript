'use strict';

let path = require('path');

module.exports = { // объект настроек
  mode: 'development', // режим работы webpack. Либо development - режим разработки, меньше оптимизации кода встроенной,но скорость работы и сборки выше. И режим production - для конечного продукта, много инструментов включено по оптимизации кода. Либо режим none - который почти не используется
  entry: './js/script.js', // файл с котрого мы начинаем, если сразу несколько файлов нужно использовать,то нужно создать тут объект
  output: {  // файл выхода,что получится в итоге
    filename: 'bundle.js', // как будет называться этот файл
    path: __dirname + '/js' // где этот файл будет находиться ...__dirname - корень нашей папки
  },
  watch: true, // если тру, то webpack будет отсмлеживать изменения наших файлов и собирать проект заново каждый раз при изменении файлов

  devtool: "source-map", // тут храниться информация об исходном коде и его местоположении

  module: {} //модули и их настройка и плагины которые можно подключить
};