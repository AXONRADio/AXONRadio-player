<template>
    <div id="app">
        <axontitle></axontitle>
        <youtubeembedded></youtubeembedded>
    </div>
</template>

<script>
   import  Axontitle from './components/Axontitle.vue'
   import  youtubeembedded from './components/YoutubeEmbedded.vue'

    export default {
        name: 'App',
        components: {
            Axontitle,youtubeembedded
        }
    }
</script>

<style>

</style>
