<template>
  <nav aria-label="Page navigation ">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="() => updatePage(pages.current_page - 1)"
        >
          <span aria-hidden="true">上一頁</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{ active: pages.current_page === page }"
        v-for="page in pages.total_pages"
        :key="page"
      >
        <span class="page-link" v-if="page === pages.current_page">{{
          page
        }}</span>
        <a
          class="page-link"
          v-else
          href="#"
          @click.prevent="() => updatePage(page)"
          >{{ page }}</a
        >
      </li>
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="() => updatePage(pages.current_page + 1)"
        >
          <span aria-hidden="true">下一頁</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["pages"],
  methods: {
    updatePage(page) {
      this.$emit("updatePage", page);
    },
  },
};
</script>
