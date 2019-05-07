<template>
    <div class="comment">
        <div class="form-control" style="display:flex;justify-content:space-between;line-height:37px;padding:0 20px;margin-bottom:8px;height:37px;border:0">
            <p><span style="color:#81c189;">宝贝评价</span><span style="color:#81c189;font-size:13px;"></span></p>
            <!-- <router-link to="/home/goodspage/2-0/comment" style="color:#ff6700;text-decoration:none;"><span style="font-size:14px;float:left;">查看全部</span><span class="iconfont" style="font-size:15px;">&nbsp;&#xe775;</span></router-link> -->
        </div>
        <div class="card" style="width:100%;border:0;margin-bottom:10px;" v-for="item in comment" :key="item.name">
            <div class="card-body" style="width:100%;padding:8px 20px;">
                <h5 class="card-title" style="display:flex;justify-content:space-between;margin-bottom:8px;">
                    <!-- color:#8f8f94; -->
                    <p class="iconfont">
                        &#xe7e3;<span style="font-size:15px;">&nbsp;{{ item.name }}</span>
                    </p>
                    <span class="iconfont" style="line-height:30px;color:#8254f7">&#xe73a;</span>
                </h5>
                <h6 class="card-subtitle mb-2">
                    <span class="badge badge-pill badge-mi">&nbsp;{{ item.time }}&nbsp;</span>&nbsp;&nbsp;
                    <span class="badge badge-pill badge-bli">&nbsp;主要颜色:{{ item.color }}&nbsp;</span>&nbsp;&nbsp;
                    <span class="badge badge-pill badge-grin">&nbsp;尺寸:{{ item.size }}&nbsp;</span>
                </h6>
                <!-- text-overflow:ellipsis;white-space:nowrap;overflow:hidden; -->
                <p class="card-text" style="width:100%;">{{ item.content }}</p>
                <img :src="comimg" class="card-img-top" alt="..." style="width:50%;">
                <h6 class="card-subtitle mb-2 text-muted" style="margin:8px 0;display:flex;justify-content:space-between;font-size:14px;">
                    <!-- <span style="line-height:20px;">浏览&nbsp;224&nbsp;次</span> -->
                    <span class="badge badge-pill badge-sata">&nbsp;浏览&nbsp;{{ item.browse }}&nbsp;次&nbsp;</span>
                    <span class="iconfont badge badge-pill badge-blood" style="font-size:20px;line-height:11px;">
                        &#xe7e1;&nbsp;<span style="font-size:14px;">{{ item.like }}</span>
                    </span>
                </h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            comment:null,
            comimg:null,
        }
    },
    created(){
        // console.log(this.$route.path);
        console.log("http://127.0.0.1:3002"+this.$route.path);
        this.getcomment();
    },
    methods:{
        getcomment(){
            this.$http.get("http://127.0.0.1:3002"+this.$route.path).then(function(response){
                this.comment = response.body.message;
                // console.log(this.comment);
                this.comimg = response.body.img;
                // console.log(this.comimg);
            });
        },
    },
}
</script>

<style scoped>

.comment .card .badge{
    height:23px;
    line-height:17px;
    font-size:13px;
    font-weight:100;
}
.card .card-title > p{
    width:70%;
    font-size:20px;
    display:block;
    margin-bottom:0;
    line-height:30px;
    color:#8254f7;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
}

</style>
