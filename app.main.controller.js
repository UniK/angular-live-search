(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('KeywordController', KeywordController);

    // KeywordController.$inject = ['KeywordFilter'];

    /* @ngInject */
    function KeywordController() {
        var self = this;
        self.word = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', ];
        self.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
         't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        activate();

        function activate() {
          console.log('KeywordController activated.');
        }
    }
})();
