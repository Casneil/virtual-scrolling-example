<template>
  <div style="display: flex; flex-direction: column; align-items: center;">
  <div style="margin-bottom: 10px;"> You scrolled: {{ scrollTop }}px</div>
  <div
    @scroll="setScrollTop"
    style="height: 500px; overflow: auto;">
    <table style="border-collapse: collapse;">
      <tbody>
        <!-- Needed to add padding for the scroll container -->
        <tr :style="`height: ${ getStartRowHeight }px;`"></tr>
        <tr
          :style="`height: ${ rowHeight }px;`"
          v-for="(row, index) in getVisibleData"
          :key="`${ row[0] }--${ index }`">
          <td
            v-for="(col, colIndex ) in row"
            :key="`${ col }--${ colIndex }`"
            style="padding: 8; border: 2px solid #cece">
              {{ col }}
            </td>
        </tr>
        <!-- Needed to add padding for the scroll container -->
        <tr :style="`height: ${ getEndRowHeight }px;`"></tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>

import { dummyData } from '../data.js';
const LIMIT = 20;

export default {
  data() {
    return {
      dummyData,
      rowHeight: 50,
      scrollTop: 0,
    }
  },
  computed: {
    getStartRowHeight() {
      return this.scrollTop + this.rowHeight;
    },
    getEndRowHeight() {
      return (this.dummyData?.length * this.rowHeight) - this.getStartRowHeight;
    },
    startElement() {
      return Math.ceil(this.scrollTop / this.rowHeight);
    },
    getVisibleData() {
      return dummyData.slice(this.startElement, this.startElement + LIMIT);
    },
  },
  methods: {
    setScrollTop($event) {
      this.scrollTop = ($event.currentTarget.scrollTop + this.rowHeight) - this.rowHeight;
    },
  },
}
</script>
