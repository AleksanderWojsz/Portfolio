<script setup>

function changeToColor(event_obj) {
  const img = event_obj.target;
  img.src = img.src.replace("/logos_black/", "/logos_colour/");
}

function changeToBW(event_obj) {
  const img = event_obj.target;
  img.src = img.src.replace("/logos_colour/", "/logos_black/");
}

</script>

<template>
<div class="fade-in-left flex flex-col items-center space-y-3">
    <p class="w-fit m-auto text-xl">Some projects I have done</p>

<div class="paper-left">
    <p class="font-bold text-center my-4">First year at university</p>
    <table><tbody>

      <tr>
        <td style="padding-right: 10px">
            <a href="https://github.com/AleksanderWojsz/Finished_Projects/tree/master/Computer%20Architecture%20and%20Operating%20Systems" target="_blank">
                Computer Architecture and OS
            </a>
        </td>
        <td class="scrollable">
          <img src="/logos_black/img_c.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
          <img src="/logos_black/img_asm.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
        </td>
      </tr>
      <tr>
        <td style="padding-right: 10px">
            <a href="https://github.com/AleksanderWojsz/Finished_Projects/tree/master/Introduction%20to%20programming" target="_blank">
                Introduction to Programming
            </a>
        </td>
        <td class="scrollable">
          <img src="/logos_black/img_c.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
        </td>
      </tr>
      <tr>
        <td style="padding-right: 10px">
            <a href="https://github.com/AleksanderWojsz/Finished_Projects/tree/master/Object%20Oriented%20Programming" target="_blank">
                OOP
            </a>
        </td>
        <td class="scrollable">
          <img src="/logos_black/img_java.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
        </td>
      </tr>
    </tbody></table>
</div>

<div class="paper-right">
    <p class="font-bold text-center my-4">Second year at university</p>
    <table><tbody>
      <tr>
        <td style="padding-right: 10px">
            <a href="https://github.com/AleksanderWojsz/Finished_Projects/tree/master/Algorithms%20and%20data%20structures" target="_blank">
                Algorithms and data structures
            </a>
        </td>
        <td class="scrollable">
          <img src="/logos_black/img_cpp.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
        </td>
      </tr>
      <tr>
        <td style="padding-right: 10px">
            <a href="https://github.com/AleksanderWojsz/Finished_Projects/tree/master/C%2B%2B%20Programming%20Course" target="_blank">
                C++ Programming Course
            </a>
        </td>
        <td class="scrollable">
          <img src="/logos_black/img_cpp.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
        </td>
      </tr>
      <tr>
        <td style="padding-right: 10px">
            <a href="https://github.com/AleksanderWojsz/Finished_Projects/tree/master/Computer%20Networks" target="_blank">
                Computer Networks
            </a>
        </td>
        <td class="scrollable">
          <img src="/logos_black/img_cpp.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
          <img src="/logos_black/img_c.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
        </td>
      </tr>
      <tr>
        <td style="padding-right: 10px">
            <a href="https://github.com/AleksanderWojsz/Finished_Projects/tree/master/Concurrent%20programming" target="_blank">
                Concurrent Programming
            </a>
        </td>
        <td class="scrollable">
          <img src="/logos_black/img_c.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
          <img src="/logos_black/img_java.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
        </td>
      </tr>
      <tr>
        <td style="padding-right: 10px">
            <a href="https://github.com/AleksanderWojsz/Finished_Projects/tree/master/Databases" target="_blank">
                Databases
            </a>
        </td>
        <td class="scrollable">
          <img src="/logos_black/img_postgresql.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
        </td>
      </tr>
      <tr>
        <td style="padding-right: 10px">
            <a href="https://github.com/AleksanderWojsz/Finished_Projects/tree/master/Introduction%20to%20Machine%20Learning" target="_blank">
                Introduction to Machine Learning
            </a>
        </td>
        <td class="scrollable">
          <img src="/logos_black/img_py.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
        </td>
      </tr>
      <tr>
        <td style="padding-right: 10px">
            <a href="https://github.com/AleksanderWojsz/Finished_Projects/tree/master/Web%20Applications" target="_blank">
                Web Applications
            </a>
        </td>
        <td class="scrollable">
          <img src="/logos_black/img_vue.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
          <img src="/logos_black/img_fastapi.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
          <img src="/logos_black/img_html.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
          <img src="/logos_black/img_js.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
          <img src="/logos_black/img_ts.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
        </td>
      </tr>
    </tbody></table>
</div>

<div class="paper">
    <p class="font-bold text-center my-4">Personal Projects</p>
    <table><tbody>
      <tr>
        <td style="padding-right: 10px">
            <a href="https://github.com/AleksanderWojsz/Finished_Projects/tree/master/Personal%20Projects/Homepage" target="_blank">
                Homepage
            </a>
        </td>
        <td class="scrollable">
          <img src="/logos_black/img_vue.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
          <img src="/logos_black/img_tailwind.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
        </td>
      </tr>
      <tr>
        <td style="padding-right: 10px">
            <a href="https://github.com/AleksanderWojsz/Finished_Projects/tree/master/Personal%20Projects/Organiser" target="_blank">
                Organiser Website/App
            </a>
        </td>
        <td class="scrollable">
          <img src="/logos_black/img_vue.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
          <img src="/logos_black/img_fastapi.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
          <img src="/logos_black/img_py.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
          <img src="/logos_black/img_tailwind.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
        </td>
      </tr>
      <tr>
        <td style="padding-right: 10px">
            <a href="https://github.com/AleksanderWojsz/Finished_Projects/tree/master/Personal%20Projects/Reinforcement%20Learning" target="_blank">
                Reinforcement Learning
            </a>
        </td>
        <td class="scrollable">
          <img src="/logos_black/img_py.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
          <img src="/logos_black/img_openai_gym.png" style="height:50px; width:auto;" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
        </td>
      </tr>
    </tbody></table>
</div>


</div>

</template>

<style scoped>

.scrollable {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    gap: 10px;
    padding: 5px;
    width: 100%;
}

</style>