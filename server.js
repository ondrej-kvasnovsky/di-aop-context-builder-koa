const ConfiDI = require('confi-di')

const handlers = [
  {
    'classPatterns': ['.*Service'],
    'methodPatterns': ['find.*'],
    'handler': {
      apply: async function(target, thisArg, args) {
        console.log('proxy called')
        return target.apply(thisArg, args)
      }
    }
  },
  {
    'classPatterns': ['.*Controller'],
    'methodPatterns': ['show'],
    'handler': {
      apply: function(target, thisArg, args) {
        console.log('controller proxy called')
        return target.apply(thisArg, args)
      }
    }
  }
]
const confiDi = new ConfiDI('context-config.json', handlers)

confiDi.getContext().getComponent('app').listen(3000, function () {
  const host = 'localhost'
  const port = '3000'

  console.log('Listening at http://%s:%s', host, port)
})
