<template>
  <div class="container">
    <Header />
    <div class="nav_box">
      <!-- 轮播图位置 -->
    </div>
    <div class="banner">
      <ul class="ban_list">
        <li>
          <span>Text1</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt assumenda, delectus dolor ipsa alias voluptatum consectetur quos culpa optio! Commodi aperiam placeat reiciendis sint voluptas numquam vel beatae fugiat adipisci!</p>
        </li>
        <li>
          <span>Text2</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt assumenda, delectus dolor ipsa alias voluptatum consectetur quos culpa optio! Commodi aperiam placeat reiciendis sint voluptas numquam vel beatae fugiat adipisci!</p>
        </li>
        <li>
          <span>Text3</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt assumenda, delectus dolor ipsa alias voluptatum consectetur quos culpa optio! Commodi aperiam placeat reiciendis sint voluptas numquam vel beatae fugiat adipisci!</p>
        </li>
      </ul>
    </div>
    <div class="article">
      <div class="content">
        <div class="art">
          <div class="art_img">
            <img src="../../assets/images/text.jpg" alt />
          </div>
          <div class="art_text">
            <span>text1</span>
            <span>Indomite</span>
            <span>2020.06.10</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore distinctio aperiam nostrum in voluptatem praesentium quibusdam sint deleniti sapiente fugit. Voluptatibus debitis ipsum corporis. A reiciendis error odio beatae quae.</p>
            <span class="linked">
              <a href>阅读全文>>></a>
            </span>
          </div>
        </div>
        <div class="art">
          <div class="art_img">
            <img src="../../assets/images/text.jpg" alt />
          </div>
          <div class="art_text">
            <span>text1</span>
            <span>Indomite</span>
            <span>2020.06.10</span>
            <p>lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore distinctio aperiam nostrum in voluptatem praesentium quibusdam sint deleniti sapiente fugit. Voluptatibus debitis ipsum corporis. A reiciendis error odio beatae quae.</p>
            <span class="linked">
              <a href>阅读全文>>></a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// 脚本区域
import Header from "../common/Header";
import Footer from "../common/Footer";
export default {
  name: "Body",
  components: {
    Header,
    Footer
  }
};
</script>

<style src="../../assets/css/body.css">
</style>