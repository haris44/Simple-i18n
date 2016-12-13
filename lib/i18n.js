"use strict"

var jsonObj = {};

exports.init = function(path) {
	var userLg = (navigator.language || navigator.userLanguage).match(/([A-z]){2}/g);
	try {
		jsonObj = require("../../../" + path + "/properties_" + userLg[0] + ".json");
	} catch (e) {
		jsonObj = require("../../../" + path + "/properties.json");
	}
}

Object.defineProperty(exports, "i18n", {
	get: function() {
		return new Proxy(jsonObj, {
			get: function(cible, nom) {
				return nom in cible ?
					cible[nom] :
					console.error("[i18n] Cannot found " + nom + " property")
			}
		});
	}
})
