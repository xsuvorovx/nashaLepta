'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.editorOptions = {
      "language": "en",
      "toolbar": [
        {
          "name": "tools",
          "items": [ "Maximize", "ShowBlocks" ]
        },
        {
          "name": "editing",
          "groups": [ "find", "selection", "spellchecker" ],
          "items": [ "Find", "Replace", "-", "SelectAll", "-", "Scayt" ]
        },
        {
          "name": "basicstyles",
          "groups": [ "basicstyles", "cleanup" ],
          "items": [ "Bold", "Italic", "Underline", "Strike", "Subscript", "Superscript", "-", "RemoveFormat" ]
        },
        {
          "name": "paragraph",
          "groups": [ "list", "indent", "blocks", "align", "bidi" ],
          "items": [ "NumberedList", "BulletedList", "-", "Outdent", "Indent", "-", "-", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock", "-" ]
        },
        {
          "name": "links",
          "items": [ "Link", "Unlink" ]
        },
        {
          "name": "insert",
          "items": [ "Image", "Table"]
        },
        {
          "name": "styles",
          "items": [ "Styles", "Format", "Font", "FontSize" ]
        },
        {
          "name": "colors",
          "items": [ "TextColor", "BGColor" ]
        }
      ],
      "toolbarGroups": [
        {
          "name": "document",
          "groups": [ "mode", "document", "doctools" ]
        },
        {
          "name": "clipboard",
          "groups": [ "clipboard", "undo" ]
        },
        {
          "name": "editing",
          "groups": [ "find", "selection", "spellchecker" ]
        },
        {
          "name": "forms"
        },
        "/",
        {
          "name": "basicstyles",
          "groups": [ "basicstyles", "cleanup" ]
        },
        {
          "name": "paragraph",
          "groups": [ "list", "indent", "blocks", "align", "bidi" ]
        },
        {
          "name": "links"
        },
        {
          "name": "insert"
        },
        "/",
        {
          "name": "styles"
        },
        {
          "name": "colors"
        },
        {
          "name": "tools"
        },
        {
          "name": "others"
        },
        {
          "name": "about"
        }
      ]
    };
  });
