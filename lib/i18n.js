"use strict"

var jsonObj = {};
var jsonArr = [];

exports.import = function(json, lang) {
	jsonArr.push({
		"lang": lang,
		"json": json
	})
}

exports.init = function() {
	var userLg = (navigator.language || navigator.userLanguage).match(/([A-z]){2}/g);
	jsonObj = (() => {
		const jsonlg = jsonArr.find((element) => element.lang == userLg)
		if (!!jsonlg)
			return jsonlg.json
		else
			return jsonArr.find((element) => element.lang == "default").json
	})()

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
