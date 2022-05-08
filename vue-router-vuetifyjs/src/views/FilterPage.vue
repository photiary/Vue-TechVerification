<template lang="html">
  <v-card tile>
    <v-app-bar>
      <v-btn icon>
        <v-icon @click.stop="$_clickClose">mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Filter</v-toolbar-title>
    </v-app-bar>

    <v-card-text>
      <h2>Date</h2>
      <v-chip-group
        mandatory
        active-class="primary--text"
        :value="dateFilter"
        @change="$_changeDate"
      >
        <v-chip value="today">Today</v-chip>
        <v-chip value="week">Week</v-chip>
        <v-chip value="month">Month</v-chip>
        <v-chip value="range">Range</v-chip>
      </v-chip-group>
      <v-row>
        <v-col>
          <v-menu
            v-model="fromMenu"
            :close-on-content-click="false"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                label="from"
                v-model="from"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="from"
              no-title
              @input="fromMenu = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col>
          <v-menu
            v-model="toMenu"
            :close-on-content-click="false"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                label="to"
                v-model="to"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="to"
              no-title
              @input="toMenu = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-text>
      <h2>Items</h2>
      <v-chip-group
        mandatory
        filter
        multiple
        active-class="primary--text"
        :value="itemsFilter"
        @change="$_changeItems"
      >
        <v-chip value="a">AAA</v-chip>
        <v-chip value="b">BBB</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions class="justify-center">
      <v-btn @click.stop="$_clickOk">OK</v-btn>
      <v-btn @click.stop="$_clickInit">INIT</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script type="text/javascript">
export default {
  // 이름 적는 것을 잊지마세요
  name: "filter-page",
  // compose new components
  extends: {},
  // 컴포넌트 어트리뷰트 그룹
  props: {},
  // 컴포넌트 변수 그룹
  data() {
    return {
      dateFilter: "today",
      itemsFilter: ["a"],
      from: '2022-05-08',
      fromMenu: false,
      to: '2022-05-08',
      toMenu: false,
    };
  },
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {},
  // 컴포넌트 메서드 그룹
  watch: {},
  methods: {
    $_clickClose: function () {
      this.$router.back();
    },
    $_changeDate: function (value) {
      this.dateFilter = value;
      console.log(
        "FilterPage.$_changeDate items=",
        this.dateFilter,
        ", value",
        value
      );
    },
    $_changeItems: function (values) {
      this.itemsFilter = values;
      console.log(
        "FilterPage.$_chageItems items=",
        this.itemsFilter,
        ", values",
        values
      );
    },
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate() {},
  create() {},
  mounted() {},
  destroyed() {},
};
</script>

<style scoped></style>
