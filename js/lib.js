function makeElement(type, props){
  e = document.createElement(type)
  props = props ? props : {}
  for (i in props){
    e[i] = props[i]
  }
  return e
}
