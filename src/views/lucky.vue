<template>
   <div class="lucky bg" ref='luckbody'>
       <!-- 奖品  start-->
       <Divider class="lucky-title" v-if="baseData.awards.length > 0">
           <span class="title">
               {{`${baseData.awards[baseConfig.currentAward].name}(${baseData.result[baseConfig.currentAward].length}/${baseData.awards[baseConfig.currentAward].count})`}}
           </span>
           <span v-show="baseData.awards[baseConfig.currentAward].award" style="margin-left:10px">
               {{`奖品:${baseData.awards[baseConfig.currentAward].award}`}}
           </span>
       </Divider>
        <!-- 奖品  end-->
        
        <!-- 中奖名单 start-->
        <div class="batch flexbox" v-show="!baseConfig.running && baseData.batchPlayers.length>0">
            <div class="player" v-for="(item, index) in baseData.batchPlayers" :key="index">
                 {{ item.name }}
            </div>
        </div>
        <div class="result" v-show="baseData.batchPlayers.length === 0">
            <div class="lucky-dog" v-for="(item, index) in baseData.result[baseData.currentAward]" :key="index">
            {{ item.name }}
            </div>
      </div>
        <!-- 中奖名单 end-->
        
        <!-- canvas start -->
        <div id="myCanvasContainer">
            <canvas width="300" height="300" id="myCanvas" ref="canvas">
                <p>当前浏览器不支持，大哥请换个现代浏览器吧！</p>
            </canvas>
        </div>
        <!-- canvas end -->

        <div id="tags">
            <ul>
                <li v-for="(tag, index) in baseData.members" :key="index">
                    <a href="#" target="_blank">{{ tag.name }}</a>
                </li>
            </ul>
        </div>

        <!-- 操作 start -->
                
        <div class="buttons">
             <Select v-model="baseConfig.currentAward" style="width:200px" on-change="selectFun">
                <Option v-for="(item,index) in baseData.awards" :value="index" :key="index">{{ item.name }}</Option>
            </Select>
            <Button type="info" size="default" :disabled="isDisabled" @click.prevent.native="toggleStatus">{{buttonText}}</Button>
            <Button type="warning" size="default" :disabled="goNext || baseConfig.running" @click.prevent.native="onNext">{{`下一轮`}}</Button>
            <Button type="error" size="default" shape="circle" icon="md-refresh" @click.prevent.native="onReplay" ></Button>
            <span style="color: #fff; margin-left:10px;">{{`剩余参与人数：${baseData.players.length}`}}</span>
        </div>
        <!-- 操作 end -->

   </div>
</template>

<script>
import '../assets/js/tagcanvas.min'
export default {
    name:'lucky',
    data () {
        return {
            baseConfig:{
                running:false, // 状态
                currentAward:0,  // 当前进行的抽奖
                batchNumber:10, // 一轮抽奖人数
            },
            baseData:{
                awards:[],   // 奖品
                members: [],  // 参与人员
                players: [], 
                batchPlayers: [],
                result:[],  // 结果
            },   
        }
    },
    computed: {
        // 按钮是否禁用
        isDisabled(){
            let awards = this.baseData.awards,
                result = this.baseData.result,
                currentAward = this.baseConfig.currentAward,
                players = this.baseData.players;
            
            return (
                result[currentAward].length >= awards[currentAward].count || players.length === 0
            )
        },
        // 是否继续
        goNext(){
            let awards = this.baseData.awards,
                result = this.baseData.result,
                currentAward = this.baseConfig.currentAward;
        
            return (
                result[currentAward].length < awards[currentAward].count && result[currentAward].length > 0 
            )
        },
        // 按钮状态
        buttonText(){
            if(this.baseConfig.running) return '停止';
            if(this.goNext) return '继续'
            return '开始';    
        }
    },
    created() {
        this.initDataFn(); // 数据初始化
    },
    mounted () {
      this.otherInit();
      this.initCanvansSize();  
    },
    destroyed(){
      window.onresize = null;
    },
    methods: {
    // 初始化 
       initDataFn(){
            let localstorage = this.localstorage;

            let awards = localstorage.fetch('prize').length ? localstorage.fetch('prize') : [];
            if(awards.length == 0 ){
                this.$router.replace({path: '/setting'}); // 跳转回设置页面
            }
            this.$set(this.baseData,'awards',awards);

            let result = localstorage.fetch('result').length ? localstorage.fetch('result') : [];
            awards.length && awards.forEach((item,index)=>{
                result[index] = result[index] || []
            })
            this.$set(this.baseData,'result',result);

       },
       otherInit(){
            let localstorage = this.localstorage;

            let members = localstorage.fetch('menber').length ? localstorage.fetch('menber') : [];
            this.$set(this.baseData,'members',members);

            let players = localstorage.fetch('players').length ? localstorage.fetch('players') : members;
            this.$set(this.baseData,'players',players);
            this.$store.commit('saveLocalstorage',[
                {'key':'players', 'value':players},
            ]);
       },
       // canvans初始化
       initCanvansSize(){
           let that = this;
            window.onresize = () =>{   // 窗口变化监听事件
                if(!that.timer){
                    let canvas = that.$refs.canvas;
                    canvas.width = document.body.offsetWidth;
                    canvas.height = document.body.offsetHeight;
                    that.timer = true;
                    setTimeout(()=>{
                        that.timer = false;
                    },100)
                }    
            }
            let canvas = this.$refs.canvas;
            canvas.width = document.body.offsetWidth;
            canvas.height = document.body.offsetHeight;
            setTimeout(()=>{
                this.init()
            })    
       },
    // 状态操作类
        // 下拉选中
        selectFun(){
            this.baseData.batchPlayers.splice(0);
        },
        // 切换状态
        toggleStatus(){
            let isRunning = this.baseConfig.running;
            if(isRunning){
                this.stopFn();  // 停止
            }else{
                this.startFn();  // 打开
            }
        },
        // 停止
        stopFn(){
            let awards = this.baseData.awards,
                result = this.baseData.result,
                currentAward = this.baseConfig.currentAward,
                players = this.baseData.players;
            
            this.$set(this.baseConfig,'running',false);
            TagCanvas.SetSpeed('myCanvas', this.getSpeed());
            
            let total = awards[currentAward].count;
            result[currentAward] = result[currentAward] || [];

            let todo = total - result[currentAward].length; // 剩余人数
            let batchNumber = this.baseConfig.batchNumber;  // 抽奖人数
            let batchPlayers = []; // 记录中奖人员
            let len = Math.min(players.length,batchNumber,todo);  // 参与人员 抽奖设置值 剩余人数 选最小的
            for(let i = 0 ; i < len ; i++ ){
                let index = this.getRandomInt(0,players.length - 1);
                batchPlayers.push(players.splice(index,1)[0]);
            }
            this.$set(this.baseData,'batchPlayers',batchPlayers); // 保存

            result.splice(
                currentAward,1,result[currentAward].concat(batchPlayers)
            )

            // 保存到vuex
            this.$store.commit('saveLocalstorage',[
                {'key':'players', 'value':players},
                {'key':'result', 'value':result},
            ]);

            TagCanvas.Reload('myCanvas');

        },
        // 打开
        startFn(){
            this.$set(this.baseConfig,'running',true);
            TagCanvas.SetSpeed('myCanvas', [5, 1]);
        },
        // 进入下一轮
        onNext(){
            this.baseData.batchPlayers.splice(0);
            let currentAward = this.baseConfig.currentAward,
                awards = this.baseData.awards;
            currentAward < awards.length-1 && this.baseConfig.currentAward++

            currentAward >= awards.length-1 && (
                this.$set(this.baseConfig,'currentAward',0)
            )
        },
        // 重新抽取
        onReplay(){
            this.$Modal.confirm({
               title: '提示！',
                content: '<p>是否要重新抽奖？</p>',
                 onOk: () => {
                    setTimeout(() => {
                        this.baseData.batchPlayers.splice(0);
                        let p = this.baseData.result.splice(this.baseConfig.currentAward,1,[])  // 从结果中删除当前奖抽到的人
                        this.baseData.players = this.baseData.players.concat(p[0])  // 将人员还原到参与人员的名单中
                        // 保存到vuex
                        this.$store.commit('saveLocalstorage',[
                            {'key':'players', 'value':this.baseData.players},
                            {'key':'result', 'value':this.baseData.result},
                        ]);
                        this.$Message.success('操作成功!');
                    }, 300);
                },

           })
        },

    // canvas 配置类
        // 初始化
        init(){
             try {
              TagCanvas.Start('myCanvas', 'tags', {
                textColour: null,
                dragControl: 1,
                decel: 0.95,
                textHeight: 14,
                minSpeed: 0.01,
                initial: [
                  0.1 * Math.random() + 0.01,
                  -(0.1 * Math.random() + 0.01),
                ],
              });
            } catch (e) {
              // something went wrong, hide the canvas container
              document.getElementById('myCanvasContainer').style.display =
                'none';
            }
        },
        // 抽中随机数
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        // 获取随机速度
        getSpeed: function() {
            return [0.1 * Math.random() + 0.01, -(0.1 * Math.random() + 0.01)];
          },
    }
}
</script>

<style lang="less" scoped>
    #myCanvasContainer{
        display: block;
    }
    .lucky.bg{
        background: url('../assets/img/bg.jpg');
        overflow: hidden;
        background-color: #121936;
        background-size: 100% 100% ;
        background-position: center center;
        background-repeat: no-repeat; 
    }
    a {
        color: #fff;
        font-size: 16px;
    }
    .buttons {
        position: absolute;
        bottom: 5%;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        button{
            margin: 0 4px;
        }
    }
    .lucky-title{
        font-size: 30px;
        color: #fff;
        line-height: 1.5;
        padding: 20px;
        text-align: center;
        position: absolute;
        width: 100%;
        .title{
            color: yellow;
        }
    }
    .batch {
        position: absolute;
        width: 50%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        top: 50%;
        color: #fff;
        left: 50%;
        transform: translate(-50%, -50%);
        .player {
            display: inline-block;
            text-align: center;
            font-size: 25px;
            width: 150px;
            background: #fff;
            line-height: 30px;
            color: #000;
            margin: 5px;
            border-radius: 10px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
            padding: 10px 0;
        }
    }
    .result {
        width: 200px;
        position: absolute;
        right: 10px;
        top: 100px;
        color: #fff;
        line-height: 1.5;
        font-size: 18px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .lucky-dog {
            display: inline-block;
            text-align: center;
            width: 90px;
            background: #fff;
            line-height: 30px;
            color: #000;
            margin: 5px;
            border-radius: 10px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
            padding: 5px 0;
        }
    }
    
</style>