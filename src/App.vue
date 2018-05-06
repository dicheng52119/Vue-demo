<template>
  <div id="app">
    <tabs></tabs>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import Tabs from './components/Tabs'
import './assets/less/site.less'
export default {
  components: {Tabs}
}
</script>
