(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function calculaPropriedade3025(numero) {
  if (numero >= 0 && numero <= 9999) {
    console.log("cheguei aqui 1");

    aux1 = parseInt(numero / 100);
    aux2 = numero % 100;
    soma = aux1 + aux2;

    if (soma * soma == numero) {
      return true;
    } else return false;
  }
}

exports.calculaPropriedade3025 = calculaPropriedade3025;

},{}],2:[function(require,module,exports){
const calculaPropriedade3025 = require("../Algoritmo1");

QUnit.test("Verifica a propriedade do numero 3025", function(assert) {
  let resultado = calculaPropriedade3025.calculaPropriedade3025(3025);

  assert.equal(resultado, true, "Teste correto");
});

QUnit.test("Verifica a propriedade do numero 0001", function(assert) {
  let resultado = calculaPropriedade3025.calculaPropriedade3025(0001);

  assert.equal(resultado, true, "Teste correto");
});

},{"../Algoritmo1":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9BbGdvcml0bW8xLmpzIiwiQWxnb3JpdG1vMVRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gY2FsY3VsYVByb3ByaWVkYWRlMzAyNShudW1lcm8pIHtcclxuICBpZiAobnVtZXJvID49IDAgJiYgbnVtZXJvIDw9IDk5OTkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2hlZ3VlaSBhcXVpIDFcIik7XHJcblxyXG4gICAgYXV4MSA9IHBhcnNlSW50KG51bWVybyAvIDEwMCk7XHJcbiAgICBhdXgyID0gbnVtZXJvICUgMTAwO1xyXG4gICAgc29tYSA9IGF1eDEgKyBhdXgyO1xyXG5cclxuICAgIGlmIChzb21hICogc29tYSA9PSBudW1lcm8pIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0cy5jYWxjdWxhUHJvcHJpZWRhZGUzMDI1ID0gY2FsY3VsYVByb3ByaWVkYWRlMzAyNTtcclxuIiwiY29uc3QgY2FsY3VsYVByb3ByaWVkYWRlMzAyNSA9IHJlcXVpcmUoXCIuLi9BbGdvcml0bW8xXCIpO1xyXG5cclxuUVVuaXQudGVzdChcIlZlcmlmaWNhIGEgcHJvcHJpZWRhZGUgZG8gbnVtZXJvIDMwMjVcIiwgZnVuY3Rpb24oYXNzZXJ0KSB7XHJcbiAgbGV0IHJlc3VsdGFkbyA9IGNhbGN1bGFQcm9wcmllZGFkZTMwMjUuY2FsY3VsYVByb3ByaWVkYWRlMzAyNSgzMDI1KTtcclxuXHJcbiAgYXNzZXJ0LmVxdWFsKHJlc3VsdGFkbywgdHJ1ZSwgXCJUZXN0ZSBjb3JyZXRvXCIpO1xyXG59KTtcclxuXHJcblFVbml0LnRlc3QoXCJWZXJpZmljYSBhIHByb3ByaWVkYWRlIGRvIG51bWVybyAwMDAxXCIsIGZ1bmN0aW9uKGFzc2VydCkge1xyXG4gIGxldCByZXN1bHRhZG8gPSBjYWxjdWxhUHJvcHJpZWRhZGUzMDI1LmNhbGN1bGFQcm9wcmllZGFkZTMwMjUoMDAwMSk7XHJcblxyXG4gIGFzc2VydC5lcXVhbChyZXN1bHRhZG8sIHRydWUsIFwiVGVzdGUgY29ycmV0b1wiKTtcclxufSk7XHJcbiJdfQ==
