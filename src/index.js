'use strict'

import 'babel-polyfill'

import Combokeys from 'combokeys'

import BindDictionaryPlugin from 'combokeys/plugins/bind-dictionary'
import PausePlugin from 'combokeys/plugins/pause'

import BindScrollToPlugin from './bind-scroll-to'


// ----------------------------------------------------------------------------

console.dir(Combokeys)

// let ckeys = new Combokeys(document.documentElement)
// console.log(ckeys)


const plugins = [
  BindDictionaryPlugin,
  PausePlugin,
  BindScrollToPlugin
]

//const ComboKeysOut = BindScrollToPlugin(PausePlugin(BindDictionaryPlugin(ckeys)))

// ----------------------------------------------------------------------------

export default plugins.reduce((ck, plugin_func) => plugin_func(ck), Combokeys)
