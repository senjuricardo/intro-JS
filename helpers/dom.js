/*function qsa(baseElement, selector){
return baseElement.querySelectorAll(selector)
}*/

const qs = (selector, baseElement = document) => baseElement.querySelector(selector)

const qsa = (selector, baseElement = document) =>
[... baseElement.querySelectorAll(selector)]

export  {qs, qsa}