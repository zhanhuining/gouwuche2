<template>
 <div class="home">
    <el-container>
       <el-header>购物车</el-header>
       <el-container>
        <!-- 自适应 侧边栏的大小 -->
          <!-- <el-aside :width="isCollapse ? '100px' : '300px' "> -->
          <el-aside width= "300px">
             <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
               <el-radio-button :label="false">展开</el-radio-button>
               <el-radio-button :label="true" >收起</el-radio-button>
             </el-radio-group> -->
              <el-menu  class="el-menu-vertical-demo"  :collapse="isCollapse">
                 <el-menu-item index="2">
                     <i class="el-icon-s-claim"></i>
                     <span slot="title">
                        <router-link to="/shoplist">
                             列表
                        </router-link>
                     </span>
                 </el-menu-item>
                  <el-menu-item index="3">
                     <i class="el-icon-shopping-cart-2"></i>
                     <span slot="title">
                        <router-link to="/shopcart"> 
                          购物车
                        </router-link>
                     </span>
                 </el-menu-item>
             </el-menu> 
          </el-aside>
        <el-main>
             <router-view></router-view>
        </el-main>
       </el-container>
     </el-container>

 </div>
 
</template>
<script>


export default {
 name: 'home',

 data(){
 return{
   val:'',
   isCollapse: false
 }

 },

 methods:{
 parent(childValue){
 this.val = childValue
 },



 }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #c1c7cf;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #b7f4eb;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #77eede;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 300px;
    min-height: 200px;
  }

</style>