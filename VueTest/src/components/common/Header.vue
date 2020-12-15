<template>
  <div class="hello">
    <!-- 导航栏 -->
    <div class="header">
      <!-- 左侧导航栏 -->
      <div class="left_header">
        <ul class="left_mean">
          <li>
            <a href>
              <span>首页</span>
            </a>
          </li>
          <li>
            <a href="/#/login">
              <span>你好: Admin</span>
            </a>
          </li>
          <li>
            <a href>
              <span>退出</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- 右侧导航栏 -->
      <div class="right_header">
        <ul class="right_mean">
          <li>
            <a href>
              <span>产品</span>
            </a>
          </li>
          <li>
            <a href>
              <span>运维</span>
            </a>
          </li>
          <li>
            <a href>
              <span>Ui</span>
            </a>
          </li>
          <li>
            <a href>
              <span>后端</span>
            </a>
          </li>
          <li>
            <a href>
              <span>前端</span>
            </a>
          </li>
          <li>
            <input type="text" placeholder="搜索" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: {
      type: String,
      default: "header nav"
    }
  }
};
</script>

<style src="../../assets/css/header.css">
</style>
