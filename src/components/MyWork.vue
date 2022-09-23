<template>
  <div class="work">
    <h1 class="text-center work-h1">作品</h1>
      <v-timeline>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
      </template>
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
          <strong>{{year.title}}</strong>
        </h2>
        <div>
          <!-- Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. -->
          {{year.message}}
          <br>
          <!-- <div v-if="flag">
          ddddddddddd
          </div> -->
          <div v-if="year.urlflag">
            <a href="http://manabi.gonna.jp/manabi-rika/listhtml/syokubutu1.html">サイトはこちらから</a>
            <!-- <a href="year.url">こちらから</a> -->
          </div>
          <br>
          <!-- {{year.alt}} -->
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
  </div>
</template>

<script>
  export default {
    data: () => ({
      years: [
        {
          color: 'cyan',
          year: '2019夏',
          title:'一問一答サイト作成',
          message:'⓵塾講師をしており,生徒に隙間時間に学習してほしい⓶自分がプログラマーとして,学習のアプトプットをしたい.以上の2点からwebサイトを作成しました.使用言語はhtml,css,javascriptのみ.',
          url:'http://manabi.gonna.jp/manabi-rika/listhtml/syokubutu1.html',
          urlflag:true,
        },
        {
          color: 'green',
          year: '2019冬',
          title:'県庁の資料作成業務',
          message:'大学2年次に初めて実業務に携わる.ExcelVBAを用いて,県庁の資料作成業務の自動化を試みる.4人のメンバーを率いて,依頼主へのヒアリングから自動化できる箇所の選定,開発まで一気通貫してプロジェクトに取り組んだ.',
          // url:,
          urlflag:false,
        },
        {
          color: 'pink',
          year: '2020',
          title:'kintoneアプリ開発',
          message:'kintone内で動作するアプリ開発.javascriptをベースに,現存するカレンダー機能に+αしたアプリケーション開発をおこなう.GET/POSTなどについては知識のみだったが,経験からかなり知識が定着',
          // url:,
          urlflag:false,
        },
        {
          color: 'amber',
          year: '2021',
          title:'スクレイピングツール開発',
          message:'天気を調べたり,ニュースなどを毎日調べるのが面倒だったので,日常的にやる作業をできる限り自動化したくツールの開発を行う.天気の自動取得については,取得した情報をきちんと閲覧できるようにLineBotを作成して,決まった時刻に連絡が来るようにした.使用言語はpython,gas.' + '<h2>intmain</h2>',
          // url:,
          urlflag:false,
        },
        {
          color: 'orange',
          year: '2022',
          title:'IoTシステム開発',
          message:'2021年からのプロジェクトであり,バイトとして携わる.工場の稼働改善をしたいという要望があり,その前提として現状は工場の稼働把握を行う.工場の稼働把握についてはM5Stack+Arduino(C言語)を活用して音センサーを活用する.稼働把握システムについては作成完了しているため,今後はデータ分析を行い稼働改善につなげていく予定',
          // url:,
          urlflag:false,
        },
        {
          color: 'black',
          year: '現在',
          title:'自作ポートフォリオ制作',
          message:'大学時に自作ポートフォリオを作成するも,urlを喪失したので再制作.学習を兼ねてVueを活用して作成にいそしむ.デザインも簡単にできるし,かなり使いやすくお気に入り.',
          // url:,
          urlflag:false,
        },
      ],
    }),
  }
</script>

<style>
.work-h1 {
  color: #de6ee2;
  border-top: dashed 2px #de6ee2;
  border-bottom: dashed 2px #de6ee2;
}
</style>