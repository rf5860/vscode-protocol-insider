// ==UserScript==
// @name         VSCode Insiders - Protocol Update
// @version      0.1
// @description  Updates vscode: to vscode-insiders: protocols
// @author       rjf89
// @match        https://marketplace.visualstudio.com/items*
// ==/UserScript==

(function() {
    'use strict';
  let installButton = document.getElementsByClassName('ux-button install')[0];
  if (installButton) {
    installButton.protocol = 'vscode-insiders:';
  }
})();