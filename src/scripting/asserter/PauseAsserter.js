module.exports = class MediaAsserter {
  constructor (context, caps = {}) {
    this.context = context
    this.caps = caps
  }

  assertMeEnd (convo, convoStep, args, botMsg) {
    if (!args || args.length < 1) {
      return Promise.reject(new Error(`${convoStep.stepTag}: Missing argument`))
    }
    if (args.length > 1) {
      return Promise.reject(new Error(`${convoStep.stepTag}: Too much argument "${args}"`))
    }

    const parsed = Number(args[0])
    if (parseInt(parsed, 10) !== parsed) {
      return Promise.reject(new Error(`${convoStep.stepTag}: Wrong argument "${args[0]}"`))
    }

    return new Promise(resolve => setTimeout(resolve, parsed))
  }
}