"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

// Aux function to get the div in which to display messages
// It's centralized here so we can change it easily in the case its ID changes
const msgsDivID = "errors";

function getErrorsDiv() {
    return document.getElementById(msgsDivID);
}

const messageRenderer = {

    showMessageAsAlert: function (message, bootClass, err) {
        let html = `<div class="alert alert-${bootClass} alert-dismissible col-md-12">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        ${message}
                    </div>`;
        let errorsDiv = getErrorsDiv();

        if (errorsDiv === null) {
            console.error("You tried to render the following message, however, a " +
                `<div id="${msgsDivID}"> could not be found in your view to show it there:`);
            console.error(message);
            return;
        }

        let messageElem = parseHTML(html);
        errorsDiv.appendChild(messageElem);

        if(err != null){
            throw(err);
            // console.error(err)
        }
    },

    showErrorAsAlert: function (message, err = null) {
        this.showMessageAsAlert(message, "danger", err);
    },

    showWarningAsAlert: function (message, err = null) {
        this.showMessageAsAlert(message, "warning", err);
    },

    showSuccessAsAlert: function (message, err = null) {
        this.showMessageAsAlert(message, "success", err);
    },
}

export { messageRenderer };