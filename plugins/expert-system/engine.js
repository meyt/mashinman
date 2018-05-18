
export default function ExpertSystemEngine () {
  return {
    knowledgeBase: {},
    breadcrumb: ['root'],
    currentResource: {},
    currentQuestion: null,
    currentOptions: null,
    conclusion: null,
    load () {
      /**
       * Load base resource
       */
      this.currentResource = this.knowledgeBase.root
      this.applyCurrentResource()
    },
    answer (item) {
      /**
       * Answering to current question and append it to breadcrumb
       *
       * @param {string} item Selected answer
       */
      if (this.conclusion === null) {
        const answerValue = this.currentResource[this.currentQuestion][item]
        const nextResource = this.resolveNextResource(answerValue)
        if (nextResource) {
          this.breadcrumb.push(this.currentQuestion)
          this.breadcrumb.push(item)
          this.currentResource = this.resolveNextResource(answerValue)
          this.applyCurrentResource()
        } else {
          this.conclusion = answerValue
          this.breadcrumb.push(answerValue)
        }
      }
    },
    resolveNextResource (answerValue) {
      /**
       * Finding the next resource
       *
       * @param {string|object|undefined} answerValue
       */
      if (typeof answerValue === 'string') {
        if (answerValue.startsWith('~')) {
          if (this.knowledgeBase.hasOwnProperty(answerValue + '.yml')) {
            return this.knowledgeBase[answerValue + '.yml']
          } else if (this.knowledgeBase.hasOwnProperty(answerValue + '/index.yml')) {
            return this.knowledgeBase[answerValue + '/index.yml']
          }
        } else {
          return null
        }
      } else if (typeof answerValue === 'object') {
        return answerValue
      }
    },
    applyCurrentResource () {
      /**
       * Apply the current resource and prepare Questions/Options
       */
      this.currentQuestion = Object.keys(this.currentResource)[0]
      this.currentOptions = Object.keys(this.currentResource[this.currentQuestion])
    }
  }
}
