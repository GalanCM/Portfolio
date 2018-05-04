<template>
  <CaseStudy :studyName=" 'This Site' ">
    <div slot='tech-case'>
      <h1>Tech case</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor consectetur erat, et aliquam neque rhoncus non. Fusce semper ullamcorper sapien ut bibendum. Sed ut imperdiet turpis, a laoreet quam. Quisque et libero nulla. Fusce pellentesque aliquet posuere. Nunc tempus sem quis sagittis vulputate. Pellentesque hendrerit nibh ac nisl dapibus aliquet. Nam pharetra volutpat accumsan. Duis justo turpis, aliquam nec libero id, laoreet efficitur sapien.
      </p>
      <p>
        Vestibulum dictum, lectus nec scelerisque faucibus, eros erat finibus arcu, vitae viverra metus dui ut sapien. Praesent at turpis ac justo varius varius. Integer eu velit vel lorem vehicula semper quis vitae lacus. Quisque id sapien nisl. Nunc vel sapien ligula. Sed ut urna elementum, ornare est sed, mollis enim. Fusce tristique pharetra elit nec mattis. Vivamus dignissim aliquet dolor id gravida. Aliquam erat volutpat. Nunc semper leo ac bibendum semper. In et odio finibus, pulvinar erat eu, vestibulum justo. Aenean in eleifend eros. Aenean nec hendrerit augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi at orci tortor. Pellentesque lacinia, mauris a rhoncus iaculis, augue justo viverra erat, elementum tincidunt libero felis quis arcu.
      </p>
      <p>
        Curabitur faucibus neque ligula, vitae gravida arcu mattis id. Maecenas congue auctor commodo. Phasellus sed ligula a lorem eleifend consequat a at libero. Nulla tellus libero, mollis at cursus et, aliquam eu mi. Etiam placerat laoreet lectus, suscipit accumsan tellus condimentum at. Cras non dui id ligula tempus accumsan. Vivamus non lectus non sem auctor bibendum. In augue enim, blandit at varius tempor, mattis eget lacus. Donec rhoncus lorem at iaculis accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ullamcorper vel nisi nec dignissim. 
      </p>
    </div>
    <div slot='design-case'>
      <h1>Design case</h1>
        <p>
          Sed pretium semper mattis. Suspendisse dapibus arcu volutpat viverra vehicula. Praesent ac tincidunt risus, vitae congue mauris. Maecenas varius velit ac mi consequat cursus. Duis molestie, arcu eget blandit sollicitudin, mi turpis mattis eros, vitae vulputate massa nulla at sapien. Mauris sodales quis metus vitae venenatis. Maecenas congue eu dolor convallis laoreet. Suspendisse ante nulla, feugiat et faucibus vel, dictum nec nunc. Cras rutrum purus vel dictum hendrerit. Nunc eget mi aliquam, dictum sapien nec, mollis urna. Pellentesque quis pharetra sapien.
        </p>
        <p>
          Integer auctor purus dolor, vel scelerisque est iaculis a. Pellentesque facilisis mauris non consectetur suscipit. Nulla ornare urna in ultrices lobortis. Mauris a blandit arcu, in pretium enim. Cras mollis pretium lorem, quis malesuada ipsum faucibus et. Fusce blandit erat sed enim euismod lobortis. Ut et cursus est. 
        </p>
    </div>
  </CaseStudy>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CaseStudy from "@/components/case_study.vue";

@Component({
  components: { CaseStudy }
})
export default class PortfolioStudy extends Vue {}
</script>
