# table-header-search

> An UI Component For TableHeaderSearch

## Build Setup

```bash
# install dependencies
npm install table-header-search
```

## Usage

### :searchList[Object]

```json
[
  // input
  {
    "type": "input",
    "key": "myInput",
    "name": "输入框",
    "value": "",
    // 可选参数
    "maxlength": "12",
    // 以下为可选且其对应的默认值，其他item也类似就不一一列出
    "placeholder": "请输入",
    "xs": 12,
    "sm": 8,
    "md": 8,
    "lg": 8
  },
  // select
  {
    "type": "select",
    "key": "mySelect",
    "name": "选择框",
    "value": "",
    "options": [{ "label": "全部", "value": "" }]
  },
  // date
  {
    "type": "date",
    "key": "myData",
    "name": "单个时间选择",
    "value": null, // 注意这里是null
    // 可选参数及其默认值
    "valueFormat": "yyyy-MM-dd",
    "format": "yyyy-MM-dd"
  },
  // datetimerange
  {
    "type": "datetimerange",
    "key": ["startDatetimerange", "endDatetimerange"],
    "name": "myDatetimerange",
    "value": null, // 注意这里是null
    "xs": 12,
    "sm": 12,
    "md": 12,
    "lg": 12,
    // 可选参数及其默认值
    "startPlaceholder": "开始时间",
    "endPlaceholder": "结束时间",
    "valueFormat": "yyyy-MM-dd HH:mm:ss",
    "format": "yyyy-MM-dd HH:mm:ss",
    "rangeSeparator": "-"
  },
  // daterange
  {
    "type": "daterange",
    "key": ["startDaterange", "endDaterange"],
    "name": "myDaterange",
    "value": null, // 注意这里是null
    "xs": 12,
    "sm": 12,
    "md": 12,
    "lg": 12,
    // 可选参数及其默认值
    "startPlaceholder": "开始日期",
    "endPlaceholder": "结束日期",
    "valueFormat": "yyyy-MM-dd HH:mm:ss",
    "format": "yyyy-MM-dd",
    "rangeSeparator": "-"
  }
]
```

### :btnText[Object]

```json
// 可选参数
{
  "searchIcon": "el-icon-search",
  "searchText": "查 询",
  "searchStyle": "",
  "resetText": "重 置",
  "resetIcon": "",
  "resetStyle": ""
}
```

### :loading[Boolean]

```bash
// 可选
loading: false;
```

### :disabled[Boolean]

```bash
// 可选
disabled: false;
```

### :labelWidth[String]

```bash
labelWidth: "150"
```

### @search && @reset

params: 返回 `searchList` 数组中每一项的 `key` 为键值的对象  
