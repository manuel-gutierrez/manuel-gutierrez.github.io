<script >
import Heading from "./components/Heading.vue";
import Title from "./components/Title.vue";
import Paragraph from "./components/Paragraph.vue";
import {backgroundColorChange} from '@/js/intersection.js'

export default {
  name: 'App',
  components: {
    Heading,
    Title,
    Paragraph
  }, 
  mounted(){
    backgroundColorChange(); 
  }
}

</script>

<template>
    <div class="container body-color">
    <Heading/>
    <section id="content">
    <Title/>
    <Paragraph/>
    </section>
  </div>
</template>

