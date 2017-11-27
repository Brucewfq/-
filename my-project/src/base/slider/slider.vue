<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span v-for="(item,index) in dots" :class="{active:currentPageIndex===index}"></span>
    </div>
  </div>
</template>
<style>
  .slider {
    overflow: hidden;
    position: relative;
    margin-top: 15px;
  }

  .slider-group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  }

  .slider-item {
    float: left;
    box-sizing: border-box;
    overflow: hidden;
    text-align: center;
  }

  .slider-item > a {
    display: block;
  }

  .slider-item img {
    display: block;
    width: 100%;
  }

  .dots {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 12px;
  }

  .dots span {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, .5);
    margin: 0 4px;
  }

  .dots span.active {
    width: 16px;
    border-radius: 4px;
    background-color: #ffffff;
  }
</style>
<script type="text/javascript">
  import { addClass } from 'common/js/dom'
  import BScroll from 'better-scroll'

  export default {
    data () {
      return {
        dots: [],
        currentPageIndex: 0
      }
    },
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      }
    },
    mounted () {
      setTimeout(() => {
        this._setSliderWidth()
        this._initDots()
        this._initSlider()
      }, 20)
    },
    methods: {
      _setSliderWidth () {
        console.log(this.$refs)
        console.log(this.$refs.sliderGroup)
        this.children = this.$refs.sliderGroup.children

        let width = 0
        let sliderWidth = this.$refs.sliderGroup.clientWidth
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          addClass(child, 'slider-item')

          child.style.width = sliderWidth + 'px'
          width += sliderWidth
        }

        if (this.loop) {
          width += 2 * sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      _initSlider () {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: {
            loop: this.loop,
            threshold: 0.3,
            speed: 400
          },
          click: true
        })

        this.slider.on('scrollEnd', () => {
          let pageIndex = this.slider.currentPage.pageX
          if (this.loop) {
            pageIndex -= 1
          }
          this.currentPageIndex = pageIndex
        })
      },
      _initDots () {
        console.log(this.children)
        this.dots = new Array(this.children.length)
      }
    }
  }
</script>
