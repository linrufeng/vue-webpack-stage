 <template>
    <div class="suiji-sence">                    
            <div class="floor1"><svg-icon class="lls" icon-class="shuang" :width="4.78" :height="1.2" ></svg-icon></div>        
            <note-show  :option="options" :start="show" slot="note">
                <note-item>
                如果假期在长一点就好了
                </note-item>              
            </note-show>               
            <div data-swiper-parallax-x="300" class="floorPic">
                <img src="../../asset/svg/suiji-shuang.svg" alt="">     
            </div>                            
    </div>   
</template>
<script lang="ts"> 
import Vue from 'vue';
import { Component, Prop, Emit, Watch } from 'vue-property-decorator';
import  {mixins}  from 'vue-class-component';
import myMixins from './../scene/common';
@Component
export default class Scene1 extends mixins(myMixins) {
 
}
</script>
<style lang="scss" scoped>
.head-card{
    margin-bottom: .38rem;
}
 .floorPic{
    width: 6.81rem;
    margin:0 auto;   
}
</style>