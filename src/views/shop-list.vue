<template>

 <div class="shop-list">
    <table>
      <el-table :data="shopList" style="width: 100%">
       <el-table-column label="id" width="180">
         <template slot-scope="scope">
           <i class="el-icon-time"></i>
           <span style="margin-left: 10px">{{ scope.row.id }}</span>
         </template>
       </el-table-column>
      <el-table-column label="名称" width="180">
         <template slot-scope="scope">
           <el-popover trigger="hover" placement="top">
             <p>{{ scope.row.name }}</p>
             <div slot="reference" class="name-wrapper">
               <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="价格" width="180">
          <template slot-scope="scope">
             <el-popover trigger="hover" placement="top">
                <p>{{ scope.row.price }}</p>
                <div slot="reference" class="name-wrapper">
                   <el-tag size="medium">{{ scope.row.price }}</el-tag>
                </div>
            </el-popover>
         </template>
      </el-table-column>
      <el-table-column label="操作">
           <template slot-scope="scope">
             <el-button size="mini" @click="add(scope.row)">添加</el-button>
           </template>
       </el-table-column>
     </el-table>
  </table>
 </div>
</template>

<script>

import{mapActions} from "vuex";

export default {
 data() {
   return {
    };
 },
 computed:{
   shopList(){
    console.log(this.$store.getters);
    return this.$store.getters.getShopList
    }
   },

 methods: {
    add(row){
       this.$store.dispatch('addToCart',{id:row.id,name:row.name,price:row.price})
     },
   }

};
</script>

<style lang="less" scoped>
.shop-list {
 width: 500px;
}

</style>