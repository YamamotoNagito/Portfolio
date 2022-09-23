<template>
  <div class="skill" id="MySkill">
    <h1 class="text-center skill-h1">プログラミングスキル</h1>
    <br>
    <v-row>
      <v-col
        cols="6"
        sm="4"
        md="4"
      >
        <div class="text-center">
          <!-- <img src="../assets/python.png"> -->
          <img src="../assets/python.svg" width="200" height="200">

          <p><b>Python</b></p>
          <!-- <p> -->
          <star-rating
            v-bind:increment=".1"
            v-bind:max-rating="5"
            :rating="4"
            inactive-color="#000"
            active-color="rgb(211, 247, 10)"
            v-bind:star-size="20"
            :show-rating="false"
            :read-only="true"
            :fixed-points="1"
            class="c-card__star"
          ></star-rating>
          <!-- </p> -->
          <p>簡単に書けるので普通に好き</p>
          <p>自作スクレイピングツール</p>
          <p>LineBot・TwitterBot</p>
          <p>簡易なwebアプリ開発(flask)</p>
        </div>
      </v-col>

      <v-col
        cols="6"
        sm="4"
        md="4"
      >
        <div class="text-center">
          <img src="../assets/C.svg" width="200" height="200">
          <p><b>C言語</b></p>
          <!-- <p> -->
          <star-rating
            v-bind:increment=".1"
            v-bind:max-rating="5"
            :rating="4"
            inactive-color="#000"
            active-color="rgb(211, 247, 10)"
            v-bind:star-size="20"
            :show-rating="false"
            :read-only="true"
            :fixed-points="1"
            class="c-card__star"
          ></star-rating>
          <!-- </p> -->
          <p>初めて学習した言語</p>
          <p>主にアルゴリズムで使用</p>
          <p>IoTを活用したシステム開発</p>
        </div>
      </v-col>

      <v-col
        cols="6"
        sm="4"
        md="4"
      >
        <div class="text-center">
          <img src="../assets/vue.svg" width="200" height="200">
          <p><b>Vue</b></p>
          <!-- <p> -->
          <star-rating
            v-bind:increment=".1"
            v-bind:max-rating="5"
            :rating="3"
            inactive-color="#000"
            active-color="rgb(211, 247, 10)"
            v-bind:star-size="20"
            :show-rating="false"
            :read-only="true"
            :fixed-points="1"
            class="c-card__star"
          ></star-rating>
          <!-- </p> -->
          <p>当サイトの作成に使用</p>
          <p>バイト先の自社webアプリ開発</p>
        </div>
      </v-col>
      <v-col
        cols="6"
        sm="4"
        md="4"
      >
        <div class="text-center">
          <img src="../assets/ExcelVBA.svg" width="200" height="200">
          <p><b>ExcelVBA</b></p>
          <!-- <p> -->
          <star-rating
            v-bind:increment=".1"
            v-bind:max-rating="5"
            :rating="4"
            inactive-color="#000"
            active-color="rgb(211, 247, 10)"
            v-bind:star-size="20"
            :show-rating="false"
            :read-only="true"
            :fixed-points="1"
            class="c-card__star"
          ></star-rating>
          <!-- </p> -->
          <p>大学2年次で初めて経験</p>
          <p>excel処理の自動化に使用</p>
          <p>県庁の資料作成業務の自動化</p>
        </div>
      </v-col>

      <v-col
        cols="6"
        sm="5"
        md="4"
      >
        <div class="text-center">
          <img src="../assets/unity.svg" width="200" height="200">
          <p><b>Unity(C#)</b></p>
          <!-- <p> -->
          <star-rating
            v-bind:increment=".1"
            v-bind:max-rating="5"
            :rating="3"
            inactive-color="#000"
            active-color="rgb(211, 247, 10)"
            v-bind:star-size="20"
            :show-rating="false"
            :read-only="true"
            :fixed-points="1"
            class="c-card__star"
          ></star-rating>
          <!-- </p> -->
          <p>ゲーム開発のため学習</p>
          <p>個人・チームを含め,数作品の作成</p>
          <p></p>
        </div>
      </v-col>

      <v-col
        cols="6"
        sm="4"
        md="4"
      >
        <div class="text-center">
          <img src="../assets/go.svg" width="200" height="200">
          <p><b>Go言語</b></p>
          <!-- <p> -->
          <star-rating
            v-bind:increment=".1"
            v-bind:max-rating="5"
            :rating="4"
            inactive-color="#000"
            active-color="rgb(211, 247, 10)"
            v-bind:star-size="20"
            :show-rating="false"
            :read-only="true"
            :fixed-points="1"
            class="c-card__star"
          ></star-rating>
          <!-- </p> -->
          <p>人気になりつつある言語</p>
          <p>現在勉強中</p>
        </div>
      </v-col>
    </v-row>
    <p></p>
  </div>
</template>

<style>
.skill-h1 {
  color: #6ee2a8;
  border-top: dashed 2px #6ee2a8;
  border-bottom: dashed 2px #6ee2a8;
}
.vue-star-rating{
  margin-left:auto;
  margin-right:auto;
}
</style>