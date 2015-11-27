(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('KeywordController', KeywordController);

    // KeywordController.$inject = ['KeywordFilter'];

    /* @ngInject */
    function KeywordController() {
        var vm = this;
        vm.word = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

        activate();

        function activate() {
          console.log('KeywordController activated.');
        }
    }
})();
