<template>
  <div>
    <h1>Hello 👋</h1>
    <h2>
      We're currently working on upgrading Lunie to support Stargate. If you
      have any questions, please reach out to
      <a href="mailto:wallet-support@tendermint.com"
        >wallet-support@tendermint.com</a
      >.
    </h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import network from '~/common/network'

export default {
  name: `Home`,
  layout: 'session-down',
  data: () => ({
    network,
  }),
  computed: {
    ...mapState(['session']),
    ...mapState('extension', ['initialized']),
  },
  mounted() {
    this.$store.dispatch('extension/init')
  },
  methods: {
    signOut() {
      this.$store.dispatch('signIn', undefined)
      this.$router.push('/validators')
    },
  },
}
</script>

<style scoped>
h1 {
  font-size: var(--text-3xl);
  text-align: center;
  padding-bottom: 1.5rem;
}

h2 {
  font-size: var(--text-sm);
  line-height: 1.5rem;
  text-align: center;
  padding-bottom: 1rem;
}

h4 {
  line-height: 2rem;
  font-size: 14px;
  color: var(--txt);
  font-weight: 500;
  padding-top: 2rem;
}

.session-list {
  padding: 0;
}

.link {
  display: flex;
  font-size: var(--text-sm);
  padding: 1rem 2rem 0;
  text-decoration: underline;
}
</style>
