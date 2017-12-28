<template>
    <div class="root">
      <div class="aui-content blue">
        <form>
          <div class="aui-content aui-margin-b-25">
            <ul class="aui-list aui-form-list">
              <li>
                <div class="prize">奖品logo</div>
              </li>

              <form-li>
                <span slot="li-title">生日</span>
                <input slot="li-input" v-model="birthday" type="text" name="name" placeholder="请填写你的生日"
                       class="aui-text-right">
              </form-li>

              <li class="aui-list-item aui-list-item-arrow">
                <div class="aui-list-item-inner">
                  <div class="aui-list-item-label"> 性别</div>
                  <div class="aui-list-item-input">
                    <choose-sex></choose-sex>
                  </div>
                </div>
              </li>

              <form-li>
                <span slot="li-title">城市</span>
                <input slot="li-input" v-model="city" type="text" name="id_card" placeholder="请输入你的城市"
                       class="aui-text-right">
              </form-li>

              <form-li>
                <span slot="li-title">手机</span>
                <input slot="li-input" v-model="phone" type="text" name="address" placeholder="请输入你的手机"
                       class="aui-text-right">
              </form-li>

              <li class="aui-list-item  inner-4">
                <div class="aui-btn aui-btn-primary aui-btn-block bottom-btn">
                  <router-link to="invite" class="bottom-btn-desc">
                    完成
                  </router-link>
                </div>
              </li>

            </ul>
          </div>
        </form>
      </div>
    </div>
</template>
<script src="./Info.js"></script>
<style src="./Info.css" scoped></style>
