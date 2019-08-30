 <template>
        <div class="scene">     
            <div class="center">                    
                     <div class="floor1"><svg-icon class="lls" icon-class="shuang" :width="3.55" :height=".8"></svg-icon></div>        
                    <note-show  :option="options" :start="run" slot="note">
                        <note-item>
                        如果假期在长一点就好了
                        </note-item>              
                    </note-show>               
                    <div data-swiper-parallax-x="300" class="img-box">
                        <img src="../../asset/svg/suiji-shuang.svg" alt="">     
                    </div>                            
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
.img-box{
    width: 6.81rem;
    margin:0 auto;
    img{
        width: 100%;
    }
}
</style>