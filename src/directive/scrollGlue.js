import Vue from 'vue'

export default {
  id: 'scroll-glue',
  update () {
    setTimeout(() => {
      this.el.scrollTop = this.el.scrollHeight;
    }, 0)
  }
}