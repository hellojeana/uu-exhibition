<template>
    <div class="root">
      <div class="aui-content blue">
        <div class="aui-list-item">
          <div class="aui-list-item-inner match-tip">
            <h1>恭喜你来到了match页面</h1>
          </div>
          <div class="aui-list-item-inner">
            <div class="prize">奖品logo</div>
          </div>
          <div class="aui-list-item-inner">
            <div class="aui-btn aui-btn-primary aui-btn-block bottom-btn">
              <router-link to="info" class="bottom-btn-desc">
                完善资料
              </router-link>
            </div>
          </div>
          <div class="aui-list-item-inner inner-4">
            <div class="aui-btn aui-btn-danger aui-btn-block bottom-btn">
              <router-link to="mode1" class="bottom-btn-desc">
                再玩一次
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script src="./Match.js"></script>
<style src="./Match.css" scoped></style>
