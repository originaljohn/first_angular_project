/**
 * Created by John on 28/07/2015.
 */
(function(){
    var app = angular.module('app', []);

    app.controller('PageController', function(){
        this.contents = columns;
    });

    app.controller('PanelController', function(){
        this.tab = 1;

        this.selectedTab = function(setTab){
            this.tab = setTab;
        };

        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

    app.controller('ContactController', function(){
        this.contact = {};
        this.allcontacts = contacts;
        this.addContact = function(contacts){
            this.contact.createdOn = Date.now();
            contacts.push(this.contact);
            this.contact = {};
        };
    });

    var columns = [
        {
            name: 'Heading',
            description: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
            url_link: 'View Details',
            has_link: false,
        },
        {
            name: 'Heading',
            description: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
            url_link: 'View Details',
            has_link: true,
        },
        {
            name: 'Heading',
            description: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
            url_link: 'View Details',
            has_link: true,
        }
    ];

    var contacts = [
        {
            name: 'Dave',
            email: 'dave@4guysandazombie.com',
            body: 'devphase is awesome!',
        },
        {
            name: '8run0',
            email: '8run0@z3r0.space',
            body: 'Devphase rocks',
        }
    ]
})();