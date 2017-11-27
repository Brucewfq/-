<template>
  <div class="tab">
    <router-link tag="div" to="/recommend" class="tab-item">
      <span>
        推荐
      </span>
    </router-link>
    <router-link tag="div" to="/rank" class="tab-item">
      <span>
        排行
      </span>
    </router-link>
    <router-link tag="div" to="/singer" class="tab-item">
      <span>
        歌手
      </span>
    </router-link>
    <router-link tag="div" to="/search" class="tab-item">
      <span>
        搜索
      </span>
    </router-link>
  </div>
</template>
<style>
  .tab {
    display: flex;
  }

  .tab .tab-item {
    flex: 1;
  }

  .tab .tab-item span {
    padding-bottom: 2px;
  }

  .tab .tab-item.router-link-active span {
    border-bottom: 2px solid #ffffff;
  }

</style>
<script type="text/javascript">
  export default {}
</script>
