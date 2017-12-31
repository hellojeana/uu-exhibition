<template>
  <div class="root">
    <div class="aui-content">
      <div class="section1 rotary aui-content">
        <div class="rotary-container">
          <div class="dot">
            <div>
              <!--中间匹配的头像-->
              <img :src="matchAvatar" class="blur-1"/>
            </div>
          </div>
          <div class="rotary-box">
            <div class="box" v-for="value,index in allData.candidates">
              <img :src="value.avatar"/>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div class="section2 aui-content aui-margin-t-10">
        <!--<div class="question2 aui-box-shadow">-->
        <!--<div class="question3 aui-box-shadow"></div>-->
        <!--</div>-->
        <div class="question1">
          <div class="qs-container aui-list-item" v-for="value,index in allData.questions"
               v-if="index == clickNum">
            <div class="qs">{{value.content}}</div>
            <div class="qs-button-container">
                            <span v-for="(one,index) in value.question_options" class="qs-button aui-list-item-label"
                                  type="button"
                                  v-if="index==0">
                                <span @click="getClick(one.id,one.weight)">{{one.content}}</span>
                            </span>
              <span v-for="(one,index) in value.question_options"
                    class="floatRight qs-button aui-list-item-label" type="button"
                    v-if="index==1">
                                <span @click="getClick(one.id,one.weight)">{{one.content}}</span>
                            </span>
            </div>
          </div>
        </div>
      </div>
      <div class="aui-content aui-margin-t-10">
        <div class="skip" @click="getClick">跳过问题></div>
      </div>
    </div>
  </div>
</template>
<script src="./Mode1.js"></script>
<style src="./Mode1.css" scoped></style>
