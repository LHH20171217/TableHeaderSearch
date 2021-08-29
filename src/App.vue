<template>
  <div id="app">
    <table-header-search
      :searchList="searchList"
      @search="search"
      @reset="reset"
      labelWidth="130"
    >
    </table-header-search>
  </div>
</template>

<script>
import TableHeaderSearch from "./TableHeaderSearch.vue";
export default {
  name: "app",
  components: {
    TableHeaderSearch
  },
  data() {
    return {
      searchList: [
        // input
        {
          type: "input",
          key: "myInput",
          name: "输入框",
          value: "",
          // 可选参数
          maxlength: "12",
          // 以下为可选且其对应的默认值，其他item也类似就不一一列出
          placeholder: "请输入",
          xs: 12,
          sm: 8,
          md: 8,
          lg: 8
        },
        // select
        {
          type: "select",
          key: "mySelect",
          name: "选择框",
          value: "",
          options: [{ label: "全部", value: "" }]
        },
        // date
        {
          type: "date",
          key: "myData",
          name: "单个时间选择",
          value: null, // 注意这里是null
          // 可选参数及其默认值
          valueFormat: "yyyy-MM-dd",
          format: "yyyy-MM-dd"
        },
        // datetimerange
        {
          type: "datetimerange",
          key: ["startDatetimerange", "endDatetimerange"],
          name: "myDatetimerange",
          value: null, // 注意这里是null
          xs: 12,
          sm: 12,
          md: 12,
          lg: 12,
          // 可选参数及其默认值
          startPlaceholder: "开始时间",
          endPlaceholder: "结束时间",
          valueFormat: "yyyy-MM-dd HH:mm:ss",
          format: "yyyy-MM-dd HH:mm:ss",
          rangeSeparator: "-"
        },
        // daterange
        {
          type: "daterange",
          key: ["startDaterange", "endDaterange"],
          name: "myDaterange",
          value: null, // 注意这里是null
          xs: 12,
          sm: 12,
          md: 12,
          lg: 12,
          // 可选参数及其默认值
          startPlaceholder: "开始日期",
          endPlaceholder: "结束日期",
          valueFormat: "yyyy-MM-dd HH:mm:ss",
          format: "yyyy-MM-dd",
          rangeSeparator: "-"
        }
      ]
    };
  },
  methods: {
    search(searchParams) {
      console.log("searchParams", searchParams);
    },
    reset(resetParams) {
      console.log("resetParams", resetParams);
    }
  }
};
</script>

<style lang="scss"></style>
