<template>
  <div :class="styles.wrapper">
    <div :class="styles.result">
      <div v-if="total">
        <strong :class="{ small: total.toString().length > 10 }">
          {{ total }}
        </strong>
      </div>
      <div v-else>
        {{ input }}
        <strong :class="{ small: result.toString().length > 10 }">
          {{ result }}
        </strong>
      </div>
    </div>
    <div :class="styles.numpad">
      <button
        @click="button(item.key)"
        v-for="(item, index) in keys"
        :key="index"
        :data-key="item.key"
        :class="styles[item.style]"
        type="button"
        aria-label="button"
      >
        <span>
          {{ item.key }}
          <span>{{ item.title }}</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import styles from '@/components/calculator.module.scss'
import { keys, equivKeys } from '@/utils/keys'

export default {
  name: 'Calculator',

  data() {
    return {
      styles,
      keys,
      input: '',
      total: '',
    }
  },

  methods: {
    button(key) {
      let input = this.input
      let total = this.total

      if (input === '0' && key === '0') return ''

      switch (key) {
        case 'c':
          input = ''
          total = ''
          break

        case '<':
          input = input?.slice(0, -1)
          break

        case '=':
          input = ''
          total = this.result
          break

        default:
          if (total) {
            input = total
            total = ''
          }
          input = input + key
      }

      if (input.length === 16) return ''

      if (isNaN(parseInt(input.at(0)))) {
        input = ''
      } else if (input.at(0) === '0' && parseInt(input.at(1)) > 0 && parseInt(input.at(1)) < 10) {
        input = input.slice(1)
      } else if (isNaN(parseInt(input.at(-2))) && isNaN(parseInt(input.at(-1)))) {
        input = input.slice(0, -2) + input.at(-1)
      }

      this.input = input
      this.total = total
    },
  },

  computed: {
    result() {
      let input = this.input

      if (input === '') return ''

      const matches = input.match(/(\d+)%(\d+(\.\d+)?)/i)

      if (matches !== null) {
        return (matches[1] * matches[2]) / 100
      }

      if (isNaN(parseInt(input.at(-1)))) {
        input = input.slice(0, -1)
      }

      try {
        let result = eval(input)
        return result
      } catch (error) {
        if (isNaN(parseFloat(input))) return ''

        return parseFloat(input)
      }
    },
  },

  mounted() {
    document.addEventListener('keyup', (e) => {
      // console.table({ "key": e.key, "code": e.code, "keyCode": e.keyCode })
      let key = equivKeys[e.key] || e.key

      // console.log("key", key)
      if (!keys.some((e) => e.key === key)) return false

      this.button(key)

      const btn = document.querySelector(`button[data-key="${key}"]`)

      btn.classList.add('focus')

      setTimeout((e) => e.classList.remove('focus'), 400, btn)
    })
  },
}
</script>
