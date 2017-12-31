<template>
    <div class="root">
      <div class="aui-content blue">
        <div class="aui-list-item">

          <div class="aui-list-item-inner">
            <div class="prize-container">
              <img src="../../assets/prize-bg.png"/>
              <div class="prize-logo">
                <img src="../../assets/ticket.png"/>
              </div>
              <span>恭喜你获得了一张免费门票!</span>
            </div>
          </div>
          <div class="aui-list-item-inner match-tip">
            <h2>请完善资料领取奖品</h2>
          </div>
          <div class="aui-list-item-inner">
            <div class="aui-btn aui-btn-block yellow-btn">
              <router-link to="info" class="yellow-btn-desc">
                完善资料
              </router-link>
            </div>
          </div>
          <div class="aui-list-item-inner inner-4">
            <div class="aui-btn aui-btn-block red-btn">
              <router-link to="mode1" class="red-btn-desc">
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
