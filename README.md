# Simple i18n 1.0


[![Build Status](https://travis-ci.org/haris44/Simple-i18n.svg?branch=master)](https://travis-ci.org/haris44/Simple-i18n)

[![Coverage Status](https://coveralls.io/repos/github/haris44/Simple-i18n/badge.svg?branch=master)](https://coveralls.io/github/haris44/Simple-i18n?branch=master)

[![Dependency Status](https://dependencyci.com/github/haris44/Simple-i18n/badge)](https://dependencyci.com/github/haris44/Simple-i18n)

Very short and simple library to use i18n.
You can use this library without React !!!  

## Import properties

You can load external JSON object with webpack for example. 

```javascript
import fr from '../properties/properties_FR.json'
```

Or use a simple javascript object

```javascript
const fr = { hello : "Bonjour !"}
```

## Init the library

On your index.js page, import i18n library. 


First parameter is a Javascript object with every property.

```javascript
import i18n from 'simple-react-i18n'
i18n.addLang(fr, ['fr', 'FR'])
i18n.addLang(en, 'default')
i18n.init()
```

## Use JSON properties 

i18n work as a closure function. Init langage on the main component, and use it 

On your component:

```javascript
import i18n from 'simple-react-i18n'
...
{ i18n.props }
```


## Installation 

You can fetch the package using npm

``` npm install simple-react-i18n ```


## Changelog 

1.0

* Add polyfill for Proxy object
* Change import method, use CommonJS2
* Add Unit Test
* Fix minor bug
* Update Readme