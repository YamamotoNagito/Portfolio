<template>
  <div class="profile" id="MyProfile">
    <h1 class="text-center profile-h1">プロフィール</h1>
    <br>
    <v-row no-gutters>
      <v-col
        cols="6"
        sm="6"
        md="6"
      >
        <!-- <v-card
          class="pa-2 text-center"
          height="100%"
          outlined
          tile
        > -->
        <div class="text-center">
          <!-- 今後画像の差し替えを検討 -->
          <!-- <img src="../assets/logo.png"> -->
          <img src="../assets/MyPhoto.png" width="200" height="200">
          <br>
          <p>広島大学大学院</p>
          <p>先進理工系科学研究科 先進理工系科学 情報科学プログラム専攻</p>
          <p>山本 凪人</p>
        </div>
        <!-- </v-card> -->
      </v-col>
      <v-col
        cols="6"
        sm="6"
        md="6"
      >
        <!-- <v-card
          class="pa-2 text-left"
          height="100%"
          outlined
          tile
        > -->
        <div class="text-left">
          <p>#おしゃべりメガネ</p>
          <p>#人見知りします</p>
          <p>#知識欲のエンジニア</p>
          <p>#人が環境を作り,環境が人を作る</p>
          <p>#アイデアとは何か?</p>
          <p>#努力は成功するとは限らないが,無駄な努力は一つもない</p>
          <p>#努力できるのも才能</p>
          <p>#愚者は何からも学ばず,賢者は知識や経験から学ぶ</p>
        </div>
        <!-- </v-card> -->
      </v-col>
    </v-row>

    <!-- <v-divider></v-divider> -->
  
  </div>
</template>
<style>
.profile-h1 {
  color: #6594e0;
  border-top: dashed 2px #6594e0;
  border-bottom: dashed 2px #6594e0;
}
/*
h1 {
  position: relative;
  padding: 0.25em 1em;
  border-top: solid 2px black;
  border-bottom: solid 2px black;
}
h1:before, h1:after {
  content: '';
  position: absolute;
  top: -7px;
  width: 2px;
  height: -webkit-calc(100% + 14px);
  height: calc(100% + 14px);
  background-color: black;
}
h1:before {
  left: 7px;
}
h1:after {
  right: 7px;
}
*/
</style>