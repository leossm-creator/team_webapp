<template>
  <div class="page_container">
    <h1 is="sui-header" class="page_heading">Our Works</h1>
    <v-container class="content_container" id="ow_1">
      <v-sheet
        color="white"
      >
        <v-sparkline
          :value="value"
          :gradient="gradient"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          auto-draw
          :labels="value"
          color="white"
        ></v-sparkline>
        <template v-slot:label="item">
            {{ item.value }}
        </template>
      </v-sheet>
      <h2>신약</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
        vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
        vitae, justo. Nullam dictum felis eu pede
        <a href="javascript:void 0">link</a> mollis pretium. Integer tincidunt.
        Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
        nisi.
      </p>
    </v-container>
    <v-container class="content_container" id="ow_2">
      <h2>공동 연구</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
        vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
        vitae, justo. Nullam dictum felis eu pede
        <a href="javascript:void 0">link</a> mollis pretium. Integer tincidunt.
        Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
        nisi.
      </p>
    </v-container>
    <v-container class="content_container" id="ow_3">
      <h2>투자</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
        vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
        vitae, justo. Nullam dictum felis eu pede
        <a href="javascript:void 0">link</a> mollis pretium. Integer tincidunt.
        Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
        nisi.
      </p>
    </v-container>
  </div>
</template>
<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]
export default {
  name: "OurWorks",
  data() {
    return {
      width: 2.5,
      radius: 10,
      padding: 10,
      lineCap: 'round',
      gradient: gradients[2],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 5, 9],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      // labels: [
      //   '12am',
      //   '3am',
      //   '6am',
      //   '9am',
      //   '12pm',
      //   '3pm',
      //   '6pm',
      //   '9pm',
      // ],
    }
  }
}
</script>
<style scoped lang="scss">

</style>