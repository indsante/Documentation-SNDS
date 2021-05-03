<!-- .vuepress/components/TagLinks.vue -->
<template lang="html">
  <div>
    <router-link
      v-for="tag in $page.frontmatter.tags"
      class="tag_box"
      :key="tag"
      :to="{ path: `/tags.html#${tag}`}"
      >
      {{tag}}
    </router-link>
  </div>
</template>


<style scoped lang="stylus">
.tag_box {
  background-color: #f4f4f5;
  display: inline-block;
  height: 32px;
  padding: 0 10px;
  line-height: 30px;
  font-size: 12px;
  color: #12566F;
  border: 1px solid #e9e9eb;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
  margin-left: 10px;
  margin-top: 5px;
}
</style>
