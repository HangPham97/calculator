<template>
    <table class="content-table">
        <tr class="display-td">
        <td class="display" colspan="4">{{logList}}</td>
        </tr>
        <tr>
            <td class="answer" colspan="4">{{ answer }}</td>
        </tr>
        <tr class="button">
            <td @click="append('7')" class="number">7</td>
            <td @click="append('8')" class="number">8</td>
            <td @click="append('9')" class="number">9</td>
            <td @click="append('/')" class="operator">/</td>
        </tr>
        <tr class="button">
            <td @click="append('4')" class="number">4</td>
            <td @click="append('5')" class="number">5</td>
            <td @click="append('6')" class="number">6</td>
            <td @click="append('*')" class="operator">*</td>
        </tr>
        <tr class="button">
            <td @click="append('1')" class="number">1</td>
            <td @click="append('2')" class="number">2</td>
            <td @click="append('3')" class="number">3</td>
            <td @click="append('-')" class="operator">-</td>
        </tr>
        <tr class="button">
            <td @click="off()" class="off">DEL</td>
            <td @click="append('0')" class="number">0</td>
            <td @click="equal()" class="number">=</td>
            <td @click="append('+')" class="operator">+</td>
        </tr>
    </table>
</template>

<script>
export default {
  data () {
    return {
      logList: '',
      answer: '',
      flag: 0
    }
  },
  methods: {
    append (inputData) {
      this.inputData = `${inputData}`
      var inputInt = parseInt(this.inputData)
      if (Number.isInteger(inputInt)) {
        this.logList += this.inputData
        this.flag = 0
      } else if (!Number.isInteger(inputInt) && this.flag === 0) {
        this.logList += this.inputData
        this.flag = 1
      } else if (!Number.isInteger(inputInt) && this.flag === 1) {
        var length = this.logList.length
        this.logList = this.logList.substring(0, length - 1)
        this.logList += this.inputData
        this.flag = 1
      }
    },
    equal () {
    // eslint-disable-next-line no-eval
      this.answer = eval(this.logList)
    },
    off () {
      this.logList = ''
      this.answer = ''
    }
  }
}
</script>

<style src="./calculator.css"></style>
