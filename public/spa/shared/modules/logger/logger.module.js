(function () {
    'use strict';

    angular
        .module('angular-logger', [])
        .service('Logger', Logger);
        
    
    ﻿function Logger() {

        // Initialize with the following to site.js to disable the logs
        // setInterval(function () {
        //     localStorage.setItem('environment', 'production');
        // }, 1);

        this.enabled = localStorage.getItem('environment') !== 'production';
        
        this.log = function (label, data) {
            if (this.enabled) {
                if (label !== undefined && data !== null && label !== '' && data !== undefined && data !== null && data !== '') {
                    console.log(label + ': ', data);
                } else {
                    console.log(label);
                }
            }
        };
    
    }

}());