<template>
    <div class="root">
      <header class="aui-bar aui-bar-nav blue">完善资料{{city.value}}</header>
      <div class="aui-content bg-color">
        <div class="aui-content">
          <div class="avatar">
            <img src="../../assets/avatar.jpg"/>
          </div>
        </div>
        <form>
          <div class="aui-content aui-margin-b-25">
            <ul class="aui-list bg-color">

              <li class="aui-list-item aui-list-item-arrow">
                <div class="aui-list-item-inner">
                  <div class="aui-list-item-label">性别</div>
                  <div class="aui-list-item-input">
                    <choose-sex></choose-sex>
                  </div>
                </div>
              </li>

              <form-li>
                <span slot="li-title">手机</span>
                <input slot="li-input" v-model="phone" type="text" name="address" placeholder="请输入您的手机"
                       class="aui-text-right">
              </form-li>

              <li class="aui-list-item aui-list-item-arrow">
                <div class="aui-list-item-inner">
                  <div class="aui-list-item-label">您的生日是？</div>
                  <div class="aui-list-item-input"  style="height: 300px">
                    <calendar-input :isRed="true"></calendar-input>
                  </div>
                </div>
              </li>

              <li class="aui-list-item">
                  <div class="aui-list-item-label">您所在的城市？</div>
              </li>
              <v-distpicker type="mobile" hide-area @province="selectProvince" @city="selectCity"></v-distpicker>
            </ul>
          </div>
        </form>
        <div class="aui-list-item">
          <div class="aui-btn aui-btn-block bottom-btn blue">
            <router-link to="invite" class="bottom-btn-desc">
              完成
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>
<script src="./Info.js"></script>
<style src="./Info.css" scoped></style>
