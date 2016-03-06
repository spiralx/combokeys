'use strict'


// ----------------------------------------------------------------------------

export function* items(obj) {
  if (!obj) {
    return
  }

  for (let key of Object.keys(obj)) {
    yield [ key, obj[key] ]
  }
}

