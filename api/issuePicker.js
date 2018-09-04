"use strict"

module.exports = issuePicker;

function issuePicker(jiraClient) {
  this.jiraClient = jiraClient

  this.makeCall = function(opts, callback) {
    var queryString = {
      query: opts.query || '',
      currentJQL: opts.jql,
      currentIssueKey: opts.currentIssueKey,
      currentProjectId: opts.currentProjectId,
      showSubTasks: opts.showSubTasks || false,
      showSubTaskParent: opts.showSubTaskParent || false
    }
    
    var options = {
      uri: this.jiraClient.buildURL('/issue/picker'),
      method: 'GET',
      followAllRedirects: true,
      qs: queryString
    }

    return this.jiraClient.makeRequest(options, callback)
  }
}