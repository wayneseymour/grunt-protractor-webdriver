/*
 * grunt-protractor-webdriver
 * https://github.com/seckardt/grunt-protractor-webdriver
 *
 * Copyright (c) 2014 Steffen Eckardt
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    protractor_webdriver: {
      default_options: {},
      custom_options: {
        options: {
          path: '',
          command: ''
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'protractor_webdriver']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);
};