let url = "./properties/"
let jsonObj;

export default (function() {
	if (!jsonObj) {
		const userLg = (navigator.language || navigator.userLanguage).match(/([A-z]){2}/g);
		try {
			jsonObj = require(url + "properties_" + userLg[0] + ".json");
		} catch (e) {
			jsonObj = require(url + "properties.json");
		}
	}
	return new Proxy(jsonObj, {
		get: function(cible, nom) {
			return nom in cible ?
				cible[nom] :
				console.error("[i18n] Cannot found " + nom + " property")
		}
	});
})()
