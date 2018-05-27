<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8 md4>
      <v-card class="mt-5">
        <template v-if="conclusion">
          <v-card-text>
            <p><v-icon>assignment</v-icon>&nbsp; نتیجه: <span v-html="conclusion.replace('\n', '<br>')"></span>.</p>
          </v-card-text>
        </template>

        <template v-else>
          <v-card-text>
            <p><v-icon>help</v-icon>&nbsp;{{ questionText }}</p>
          </v-card-text>
          <transition-group name="list" tag="v-list">
            <div v-for="option, index in options"  :key="'_' + index">
              <v-list-tile @click="answer(option)">
                <v-list-tile-action>
                  <v-icon>keyboard_arrow_left</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ option }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider v-if="index !== options.length-1"></v-divider>
            </div>
          </transition-group>
        </template>

        <transition name="bounce">
          <v-card-actions v-if="engine && engine.breadcrumb.length > 1">
            <v-btn flat color="orange" @click="replay" >
              <v-icon>refresh</v-icon>شروع مجدد</v-btn>
          </v-card-actions>
        </transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import ExpertSystemEngine from '~/plugins/expert-system/engine.js'
  import knowledgeBase from '~/static/knowledgebase.json'

  export default {
    data () {
      return {
        engine: new ExpertSystemEngine(),
        knowledgebase: null,
        options: []
      }
    },
    beforeMount () {
      this.loadEngine()
    },
    computed: {
      questionText () {
        return this.engine.currentQuestion
      },
      conclusion () {
        return this.engine.conclusion
      }
    },
    methods: {
      replay () {
        this.loadEngine()
      },
      loadEngine () {
        this.engine = new ExpertSystemEngine()
        this.engine.knowledgeBase = knowledgeBase
        this.engine.load()
        this.options = this.engine.currentOptions
      },
      answer (item) {
        this.engine.answer(item)
        this.options.splice(0, this.options.length)
        if (this.engine.currentOptions) {
          this.engine.currentOptions.forEach(item => {
            this.options.push(item)
          })
        }
      }
    }
  }
</script>
