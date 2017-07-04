import i18n from '../../index'
import jsonFR from '../properties/properties_FR.json'


i18n.addLang(jsonFR, ['fr', 'FR'])
i18n.init()

console.log(i18n.myProps)