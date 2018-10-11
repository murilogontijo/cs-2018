"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * VERSÃO EMPREGANDO ES6
 * 
 * Operações matemáticas básicas fornecidas apenas com o
 * único propósito de ilustrar como funções ou métodos podem oferecer
 * funcionalidas agrupadas em uma classe.
 *
 * <p>Adicionalmente, a presente classe também ilustra o uso de
 * <a href="http://usejsdoc.org/">JSDoc</a>.</p>
 *
 * @type {module.Matematica}
 */
var Matematica = function () {
    function Matematica() {
        _classCallCheck(this, Matematica);
    }

    _createClass(Matematica, [{
        key: "soma",


        /**
         * Produz a soma dos argumentos fornecidos.
         *
         * @param {number} a Um dos argumentos.
         * @param {number} b O outro argumento.
         *
         * @see {@link Matematica#subtracao}
         *
         * @returns {number} A soma dos argumentos.
         */
        value: function soma(a, b) {
            return a + b;
        }

        /**
         * Produz a subtração entre o primeiro e o segundo argumento.
         *
         * @param a O valor do qual será feita a subtração.
         * @param b O valor a ser subtraído.
         *
         * @see {@link Matematica#soma}
         *
         * @returns {number} O resultado da subtração (a - b).
         */

    }, {
        key: "subtracao",
        value: function subtracao(a, b) {
            return a - b;
        }
    }]);

    return Matematica;
}();

exports.default = Matematica;