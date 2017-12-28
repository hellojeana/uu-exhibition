<template>
    <div class="root">
      <div class="aui-content">
        <form>
          <div class="aui-content aui-margin-b-25">
            <ul class="aui-list aui-form-list">

              <form-li>
                <span slot="li-title">姓名</span>
                <input slot="li-input" v-model="user_name" type="text" name="name" placeholder="姓名"
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
                <span slot="li-title">身份证号</span>
                <input slot="li-input" v-model="id_card" type="text" name="id_card" placeholder="身份证号"
                       class="aui-text-right">
              </form-li>

              <form-li>
                <span slot="li-title">地址</span>
                <input slot="li-input" v-model="address" type="text" name="address" placeholder="地址"
                       class="aui-text-right">
              </form-li>

              <li class="aui-list-item aui-list-item-arrow">
                <div class="aui-list-item-inner">
                  <div class="aui-list-item-label"> 头像</div>
                  <div class="aui-list-item-input ">
                    <div class="aui-media-list-item-inner aui-text-right aui-pull-right">
                      <div class="aui-list-item-media aui-padded-r-0  ">
                        <img class="aui-img-round" v-if="avatar == ''"
                             src="../../../assets/public/images/often/add_img.png"/>
                        <img v-else src="avatar"/>
                        <input accept="image/*" type="file" class="file0"/>
                        <input type="hidden" name="avatar" v-model="avatar"/>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li class="aui-list-item ">
                <div class="aui-list-item-inner aui-list-item-center aui-list-item-btn aui-padded-15">
                  <input class="  aui-btn aui-btn-info aui-btn-block  aui-btn-sm" type='submit'
                         value='提  交'/>
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
