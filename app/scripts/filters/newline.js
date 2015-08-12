'use strict';

/**
 * @ngdoc filter
 * @name angularNotesApp.filter:newLine
 * @function
 * @description
 * # newLine
 * Filter in the angularNotesApp.
 */
angular.module('angularNotesApp')
  .filter('newLine', function () {
    return function (input) {
      return input.replace(/\n/g, '<br/>');
    };
  });
