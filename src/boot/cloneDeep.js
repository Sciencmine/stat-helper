import Vue from "vue";
import { cloneDeep } from "lodash";

Vue.prototype.$deepCopy = cloneDeep;
