<template>
  <form class="form" @submit.prevent="submit">
    <slot name="overlay" />
    <header v-if="hasHeader" class="form-header">
      <div class="form-title">
        <slot name="title" />
      </div>
      <div class="form-subtitle">
        <slot name="subtitle" />
      </div>
    </header>
    <main class="form-main">
      <slot />
    </main>
    <footer v-if="hasFooter" class="form-footer">
      <slot name="footer" />
    </footer>
  </form>
</template>

<script>
// NOTICE
// Remember that v-on:submit will NOT work on this component
// Use :submit="onSubmit on the parent component and it'll save you headaches
export default {
  name: `Form`,
  props: {
    width: {
      type: String,
      default: ``,
    },
    submit: {
      type: Function,
      required: true,
    },
  },
  computed: {
    hasHeader() {
      return this.$slots.title || this.$slots.subtitle
    },
    hasFooter() {
      return this.$slots.footer
    },
  },
}
</script>

<style scoped>
.form {
  position: relative;
  width: 100%;
  display: flex;
}

.form-main {
  width: 100%;
}
</style>
