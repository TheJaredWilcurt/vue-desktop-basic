import mockAssetsReleases from './releases';

let verbs = {
  /**
   * Helper functions to get the data directly
   * @param  {string} apiName  The name of the route/mockResponse file ('assets')
   * @param  {string} path     The longer path including params ('/assets?limit=1')
   * @return {array}           [statusCode, data, headers] (for mockAxios)
   */
  get: function (apiName, path) {
    return mockResponses[apiName].GET[path].data;
  },
  post: function (apiName, path) {
    return mockResponses[apiName].POST[path].data;
  }
};

/**
 * Generic error for testing
 * @return {array}   [statusCode, data]
 */
let getError = function () {
  return {
    response: {
      data: {
        message: 'Error'
      }
    }
  };
};

let mockResponses = {
  // Helper functions
  get: verbs.get,
  post: verbs.post,
  getError,

  // Mock data responses
  releases: mockAssetsReleases
};

export default mockResponses;
