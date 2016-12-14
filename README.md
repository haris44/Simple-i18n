# Simple React i18n

Very short and simple library to use i18n on React

## Create properties folder

On your "src/", create folder "properties"
On this folder, insert your JSON i18n file as "properties_LANG.json"
Create default "properties.json" file, it was used when navigator language haven't special JSON file

## Init the library

On you index.js page

	import * as i18n from 'simple-react-i18n'

	i18n.init("src/properties")

## Use JSON properties 
On your component

	import {i18n} from 'simple-react-i18n'
	
	{...}

	// on render 
	{ i18n.props }

