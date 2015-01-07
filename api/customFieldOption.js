"use strict";

var errorStrings = require('./../lib/error');

module.exports = CustomFieldOptionClient;

/**
 * Used to access Jira REST endpoints in '/rest/api/2/customFieldOptions'
 *
 * @param {JiraClient} jiraClient
 * @constructor CustomFieldOptionsClient
 */
function CustomFieldOptionClient(jiraClient) {
    this.jiraClient = jiraClient;

    /**
     * Returns a full representation of the Custom Field Option that has the given id.
     *
     * @method getCustomFieldOption
     * @param {Object} opts The request options sent to the Jira API
     * @param {string} opts.fieldOptionId A String containing an Custom Field Option id
     * @param callback
     */
    this.getCustomFieldOption = function (opts, callback) {
        if (!opts.fieldOptionId) {
            throw new Error(errorStrings.NO_FIELD_OPTION_ID_ERROR);
        }

        var options = {
            uri: this.jiraClient.buildURL('/customFieldOption/' + opts.fieldOptionId),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };

        this.jiraClient.makeRequest(options, callback);
    };
}