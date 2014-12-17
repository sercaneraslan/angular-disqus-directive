/*
*
* ng-disqus v0.0.1
*
* (c) 2014-2015 Sercan Eraslan http://sercaneraslan.com
* License: MIT
*
*/
angular.module('ngDisqus', []).
    directive('disqus', ['$window', function($window) {

        return {
            restrict: 'E',
            scope: {
                'shortname': '@',
                'identifier': '@',
                'title': '@',
                'url': '@',
                'categoryId': '@'
            },
            template: '<div id="disqus_thread" class="disqus"></div>',
            link: function(scope) {

                // Disqus Global Variables
                $window.disqus_shortname = scope.shortname;
                $window.disqus_identifier = scope.identifier;
                $window.disqus_title = scope.title;
                $window.disqus_url = scope.url;
                $window.disqus_category_id = scope.categoryId;

                // Create Disqus Script
                var dsq = document.createElement('script');

                dsq.type = 'text/javascript';
                dsq.async = true;
                dsq.src = document.location.protocol + '//' + scope.shortname + '.disqus.com/embed.js';

                document.getElementsByTagName('body')[0].appendChild(dsq);
            }
        };
    }]);
