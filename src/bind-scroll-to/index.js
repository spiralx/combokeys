'use strict'

import { items } from '../util'


// ----------------------------------------------------------------------------

export default function bindScrollTo(ComboKeys) {
  const _bind = ComboKeys.bind

  ComboKeys.bind = function(bindings, ...args) {
    // normal call
    if (typeof bindings === 'string' || Array.isArray(bindings)) {
      return _bind.call(this, bindings, args[0], args[1])
    }

    // object passed in
    for (let [ key, handler ] of items(bindings)) {
      _bind.call(this, key, handler, args[0])
    }
  }

  return ComboKeys
}
