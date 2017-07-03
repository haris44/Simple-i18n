"use strict"

require('proxy-polyfill')

let jsonObj = {};
let jsonArr = [];


const foundLang = (jsonObj, lang) => {
	const t = jsonObj.find(el => el.lang[0] === lang[0] && el.lang[1] === lang[1])
	if (t)
		return t
	else
		return jsonObj.find(el => el.lang[0] === lang[0])
}


const register = (json, lang) => {
	jsonArr.push({
		"lang": lang,
		"json": json
	})
}

const init = () => {
	const userLg = (navigator.language || navigator.userLanguage).match(/([A-z]){2}/g);
	jsonObj = (() => {
		const jsonlg = foundLang(jsonArr, userLg)
		const defaut = jsonArr.find((element) => element.lang == "default")
		if (!!jsonlg) {
			return jsonlg.json
		}
		else if (!!defaut) {
			return defaut.json
		} else {
			throw new Error("Cannot found lang")
		}
	})()
}

const clear = () => {
	jsonArr = []
	jsonObj = {}
}
module.exports = new Proxy({}, {
	get: function (cible, nom) {
		if (nom === 'import' || nom === 'register')
			return register
		else if (nom === 'init')
			return init
		else if (nom === '__esModule')
			return false
		else if (nom === "clear")
			return clear
		else if (nom in jsonObj)
			return jsonObj[nom]
		else
			throw new Error("[i18n] Cannot found " + nom + " property")

	}
});
