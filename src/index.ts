/**
 *
 */

import { quotes } from './citation.js'
import { randomElement } from './random-element.js'

export function getRandomQuote () {
  return randomElement(quotes)
}
