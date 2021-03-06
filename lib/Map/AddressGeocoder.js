'use strict';

/*global require*/
var DeveloperError = require('terriajs-cesium/Source/Core/DeveloperError');

/**
 * Determine lat and long coordinates for a given address.
 * If TableStructure has address column, adds two new columns: lat and long.
 *
 * @alias AddressGeocoder
 * @constructor
 */
var AddressGeocoder = function() {};

/**
 * Convert addresses in miniumum number of calls to the server. When the promise fulfills, the tableStructure has been
 * updated with new lat and lon columns.
 *
 * @param {TableStructure} [tableStructure] A tableStructure that contains an address column.
 * @param {CorsProxy} [corsProxy] Proxy for cross origin resource sharing
 *
 * @return {Promise} Promise that resolves to an BulkAddressGeocoderResult object.
 */
AddressGeocoder.prototype.bulkConvertAddresses = function(tableStructure, corsProxy) {
    throw new DeveloperError('bulkConvertAddresses must be implemented in the derived class.');
};

module.exports = AddressGeocoder;
