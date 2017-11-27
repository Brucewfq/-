<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <slider v-if="recommends.length" class="hello">
          <div v-for="item in recommends">
            <a :href="item.linkUrl">
              <img @load="loadImage" :src="item.picUrl" alt="">
            </a>
          </div>

        </slider>

        <h3>热门歌单推荐</h3>
        <div v-for="item in discList" class="item">
          <div class="icon">
            <img v-lazy="item.imgurl" width="60" height="60" alt="">
          </div>
          <div class="text">
            <h2 class="name" v-html="item.dissname"></h2>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>
<style>
  .recommend {
    position: fixed;
    width: 100%;
    top: 80px;
    bottom: 0;
  }

  .recommend-content {
    height: 100%;
    overflow: hidden;
  }

  .item {
    display: flex;
    align-items: center;
    padding: 0 20px 20px 20px;
  }

  .icon {
    flex: 0 0 0;
    width: 60px;
  }

  .name {
    display: flex;
    font-size: 12px;
    padding-left: 20px;
    flex-direction: column;
    justify-content: center;
  }

</style>
<script type="text/javascript">
  import Slider from 'base/slider/slider'
  import Scroll from 'base/scroll/scroll'
  import { getRecommend, getDiscList } from 'api/recommend'
  import { ERR_OK } from 'api/config'

  export default {
    data () {
      return {
        recommends: [],
        discList: []
      }
    },
    created () {
      this._getRecommend()
      this._getDiscList()
    },
    methods: {
      _getRecommend () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            console.log(res)
            this.recommends = res.data.slider
          }
        })
      },
      _getDiscList () {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list
            console.log(this.discList)
          }
        })
      },
      loadImage () {
        if (!this.loadImageChecked) {
          this.$refs.scroll.refresh()
          this.loadImageChecked = true
        }
      }
    },
    components: {
      Slider,
      Scroll
    }
  }
</script>
