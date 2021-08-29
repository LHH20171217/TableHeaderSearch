<template>
  <div id="app">
    <div class="search-box">
      <el-row>
        <el-col
          v-for="(item, index) in listData"
          :key="index"
          :xs="item.xs || 12"
          :sm="item.sm || 8"
          :md="item.md || 8"
          :lg="item.lg || 8"
        >
          <!--input输入框-->
          <div class="search-item" v-if="item.type === 'input'">
            <div class="input-suffix">
              <span
                class="search-name"
                :style="{ width: labelWidth ? labelWidth + 'px' : '100px' }"
                >{{ item.name || "" }}</span
              >
              <div class="search-input">
                <el-input
                  :placeholder="item.placeholder || '请输入'"
                  :maxlength="item.maxlength || ''"
                  v-model="item.value"
                  @keyup.enter.native="search"
                  clearable
                >
                </el-input>
              </div>
            </div>
          </div>
          <!--select选择框-->
          <div class="search-item" v-if="item.type === 'select'">
            <div class="input-suffix">
              <span
                class="search-name"
                :style="{ width: labelWidth ? labelWidth + 'px' : '100px' }"
                >{{ item.name || "" }}</span
              >
              <div class="search-input">
                <el-select
                  v-model="item.value"
                  :placeholder="item.placeholder || '请选择'"
                  @change="select(item.key, item.value)"
                >
                  <el-option
                    v-for="opt in item.options"
                    :key="opt.value"
                    :label="opt.label"
                    :value="opt.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <!--单个时间选择框-->
          <div class="search-item" v-if="item.type === 'date'">
            <div class="input-suffix">
              <span
                class="search-name"
                :style="{ width: labelWidth ? labelWidth + 'px' : '100px' }"
                >{{ item.name || "" }}</span
              >
              <div class="search-input">
                <el-date-picker
                  class="date-input"
                  v-model="item.value"
                  type="date"
                  :value-format="
                    item.valueFormat ? item.valueFormat : 'yyyy-MM-dd'
                  "
                  :format="item.format ? item.format : 'yyyy-MM-dd'"
                  :placeholder="item.placeholder || '请选择'"
                  style="width:100%"
                >
                </el-date-picker>
              </div>
            </div>
          </div>
          <!--两个时间选择框-->
          <div class="search-item" v-if="item.type === 'datetimerange'">
            <div class="input-suffix">
              <span
                class="search-name"
                :style="{ width: labelWidth ? labelWidth + 'px' : '100px' }"
                >{{ item.name || "" }}</span
              >
              <div class="search-input">
                <el-date-picker
                  v-model="item.value"
                  type="datetimerange"
                  :range-separator="
                    item.rangeSeparator ? item.rangeSeparator : '-'
                  "
                  :start-placeholder="
                    item.startPlaceholder ? item.startPlaceholder : '开始时间'
                  "
                  :end-placeholder="
                    item.endPlaceholder ? item.endPlaceholder : '结束时间'
                  "
                  :value-format="
                    item.valueFormat ? item.valueFormat : 'yyyy-MM-dd HH:mm:ss'
                  "
                  :format="item.format ? item.format : 'yyyy-MM-dd HH:mm:ss'"
                  :default-time="['00:00:00', '23:59:59']"
                >
                </el-date-picker>
              </div>
            </div>
          </div>
          <!-- 日期范围选择 -->
          <div class="search-item" v-if="item.type === 'daterange'">
            <div class="input-suffix">
              <span
                class="search-name"
                :style="{ width: labelWidth ? labelWidth + 'px' : '100px' }"
                >{{ item.name || "" }}</span
              >
              <div class="search-input">
                <el-date-picker
                  v-model="item.value"
                  type="daterange"
                  :range-separator="
                    item.rangeSeparator ? item.rangeSeparator : '-'
                  "
                  :start-placeholder="
                    item.startPlaceholder ? item.startPlaceholder : '开始日期'
                  "
                  :end-placeholder="
                    item.endPlaceholder ? item.endPlaceholder : '结束日期'
                  "
                  :value-format="
                    item.valueFormat ? item.valueFormat : 'yyyy-MM-dd HH:mm:ss'
                  "
                  :format="item.format ? item.format : 'yyyy-MM-dd'"
                  :default-time="['00:00:00', '23:59:59']"
                >
                </el-date-picker>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <slot></slot>
    </div>
    <div class="search-btn-box">
      <el-button
        @click="search"
        type="primary"
        class="search-btn"
        :loading="loading"
        :disabled="disabled"
        :icon="btnText.searchIcon"
        :style="btnText.searchStyle"
        >{{ btnText.searchText }}</el-button
      >
      <el-button
        @click="reset"
        :loading="loading"
        :disabled="disabled"
        :icon="btnText.resetIcon"
        >{{ btnText.resetText }}</el-button
      >
    </div>
  </div>
</template>
<script>
import { trimStr } from "./utils/tool";
export default {
  name: "TableHeadSearch",
  props: {
    searchList: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnText: {
      type: Object,
      default() {
        return {
          searchIcon: "el-icon-search",
          searchText: "查 询",
          searchStyle: "",
          resetText: "重 置",
          resetIcon: "",
          resetStyle: ""
        };
      }
    },
    labelWidth: {
      type: String,
      default: "100"
    }
  },
  data() {
    return {
      listData: this.searchList
    };
  },
  methods: {
    search() {
      // 查询
      let resultObj = {};
      this.listData.forEach(item => {
        if (item.type === "datetimerange" || item.type === "daterange") {
          if (item.value) {
            resultObj[item.key[0]] = item.value[0];
            resultObj[item.key[1]] = item.value[1];
          } else {
            resultObj[item.key[0]] = "";
            resultObj[item.key[1]] = "";
          }
        } else {
          resultObj[item.key] = item.value;
        }
      });
      Object.keys(resultObj).forEach(key => {
        if (!resultObj[key] && resultObj[key] !== 0) {
          resultObj[key] = "";
        } else if (typeof resultObj[key] === "string") {
          resultObj[key] = trimStr(resultObj[key]);
        }
      });
      this.$emit("search", resultObj);
    },
    reset() {
      // 重置
      let resultObj = {};
      this.listData.forEach(item => {
        if (item.type === "datetimerange" || item.type === "daterange") {
          item.value = null;
          resultObj[item.key[0]] = "";
          resultObj[item.key[1]] = "";
        } else {
          item.value = "";
          resultObj[item.key] = "";
        }
      });
      this.$emit("reset", resultObj);
    },
    select(key, value) {
      this.$emit("select", key, value);
    }
  }
};
</script>

<style scoped lang="scss">
#app {
  position: relative;
  margin-top: 20px;
  .search-box {
    margin-right: 230px;
  }
  .search-btn-box {
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    .search-btn {
      margin-right: 20px;
    }
  }
}
.search-item {
  margin-bottom: 20px;
  .input-suffix {
    display: flex;
    align-items: center;
    .search-name {
      white-space: nowrap;
      text-align: right;
      padding-right: 10px;
      color: #666;
      font-size: 15px;
      font-family: Source Han Sans CN Regular;
    }
  }
  .date-input {
    width: 160px;
  }
}
</style>
