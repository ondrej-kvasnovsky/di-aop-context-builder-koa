const ContextBuilder = require('di-aop-context-builder')

const componentScan = [
  {
    'dir': 'src',
    'include': '**/*.js'
  }
]

const pointcuts = [
  {
    'components': ['.*Service'],
    'methods': ['.*'],
    'handler': {
      apply: async function (target, thisArg, args) {
        console.log('proxy called')
        const start = new Date()

        // call a method on service
        const result = await target.apply(thisArg, args)

        const diff = new Date() - start
        console.log(`Time: ${diff}`) // report time it took to execute
        return result
      }
    }
  },
  {
    'components': ['.*Controller'],
    'methods': ['show'],
    'handler': {
      apply: async function (target, thisArg, args) {
        const start = new Date()

        const result = await target.apply(thisArg, args)

        const diff = new Date() - start
        console.log(`Time: ${diff}`) // report time it took to execute
        return result
      }
    }
  }
]

const contextBuilder = new ContextBuilder(componentScan, pointcuts)

contextBuilder.getContext().getComponent('app').listen(3000, function () {
  const host = 'localhost'
  const port = '3000'

  console.log('Listening at http://%s:%s', host, port)
})
