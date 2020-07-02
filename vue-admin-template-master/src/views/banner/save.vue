<template>
  <div class="app-container">
    Banner表单
     <el-form label-width="120px">
      <el-form-item label="Banner标题">
        <el-input v-model="banner.title"/>
      </el-form-item>
      <el-form-item label="Banner排序">
        <el-input-number v-model="banner.sort" controls-position="right" min="0"/>
      </el-form-item>   
      <el-form-item label="Banner链接地址">
        <el-input v-model="banner.linkUrl" />
      </el-form-item>

      <!-- Banner图片 -->
      <el-form-item label="Banner图片">

            <el-upload
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :action="BASE_API+'/eduoss/fileoss'"
                class="avatar-uploader">
                <img :src="banner.imageUrl">
            </el-upload>

        </el-form-item>

         <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
     </el-form>

  </div>
</template>
<script>
import bannerApi from '@/api/banner'


export default {
  data() {
    return {
      banner:{
        title:'',
        sort: 0,
        imageUrl:'/static/01.jpg',
         linkUrl:''
      },
     saveBtnDisabled:false,  // 保存按钮是否禁用,
      BASE_API: process.env.BASE_API, // 接口API地址

    }
  },
  created() { //页面渲染之前执行
    this.init()
  },
  watch: {  //监听
    $route(to, from) { //路由变化方式，路由发生变化，方法就会执行
      this.init()
    }
  },
  methods:{
    //上传Banner图片成功调用的方法
        handleAvatarSuccess(res, file) {
            this.banner.imageUrl = res.data.url
        },
         //上传之前调用的方法
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg'
            const isLt2M = file.size / 1024 / 1024 < 2

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!')
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!')
            }
            return isJPG && isLt2M
        },
         init() {
      //判断路径有id值,做修改
      if(this.$route.params && this.$route.params.id) {
          //从路径获取id值
          const id = this.$route.params.id
          //调用根据id查询的方法
          this.getInfo(id)
      } else { //路径没有id值，做添加
        //清空表单
        //this.banner = {}
      }
    },
    //根据讲师id查询的方法
    getInfo(id) {
      bannerApi.getBannerInfo(id)
        .then(response => {
          this.banner = response.data.item
        })
    },
    saveOrUpdate() {
      //判断修改还是添加
      //根据banner是否有id
      if(!this.banner.id) {
        //添加
        this.saveBanner()
      } else {
        //修改
        this.updateBanner()
      }
    },
    //修改Banner的方法
    updateBanner() {
      bannerApi.updateBannerInfo(this.banner)
        .then(response => {
          //提示信息
          this.$message({
              type: 'success',
              message: '修改成功!'
          });
          //回到列表页面 路由跳转
          this.$router.push({path:'/banner/list'})
        })
    },
    //添加Banner的方法
    saveBanner() {
      bannerApi.addBanner(this.banner)
        .then(response => {//添加成功
          //提示信息
          this.$message({
              type: 'success',
              message: '添加成功!'
          });
          //回到列表页面 路由跳转
          this.$router.push({path:'/banner/table'})
        })
    }
  }
}
</script>
