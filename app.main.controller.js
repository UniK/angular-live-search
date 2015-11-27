(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('KeywordController', KeywordController);

    // KeywordController.$inject = ['KeywordFilter'];

    /* @ngInject */
    function KeywordController() {
        var self = this;
        self.word = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

        activate();

        function activate() {
          console.log('KeywordController activated.');
        }
    }
})();
