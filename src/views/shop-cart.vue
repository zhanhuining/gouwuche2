<template>
 <div class="shop-list">
   <table>
     <el-table :data="cartData" style="width: 100%">
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
     <el-table-column label="数量" width="180">
       <template slot-scope="scope">
         <el-button size="mini" @click="reduceNum(scope.row)" :disabled="scope.row.num == 1">-</el-button>
         <span id="num">{{scope.row.num}}</span>
         <el-button size="mini" @click="addNum(scope.row)">+</el-button>
      </template>
     </el-table-column>
     <el-table-column label="操作">
       <template slot-scope="scope">
         <el-button size="mini" @click="del(scope.$index,scope.row)">删除</el-button>
       </template>
     </el-table-column>
   </el-table>
 </table>
 <div class="total">
     <span>总数量{{totalNum}}</span>
    <span>总价格{{totalPrice}}</span>
    <el-button type="danger" @click="clearCart">清空购物车</el-button>
 </div>
 </div>
</template>

<script>
 import {mapGetters,mapActions } from "vuex";

export default {

 data() {
    return {
     shop_list: [
      { id: 11, name: "鱼香肉丝", price: 12 },
      { id: 22, name: "宫保鸡丁", price: 14 },
      { id: 34, name: "土豆丝", price: 10},
      { id: 47, name: "米饭", price: 2 },
      { id: 49, name: "蚂蚁上树", price: 13 },
      { id: 50, name: "腊肉炒蒜薹", price: 15 }
     ]  
   };
 },

 computed:{
   ...mapGetters({
     cartData:'addShopList',
     totalNum:'totalNum',
      totalPrice:'totalPrice'
   })
 },

 methods: {
   clearCart() {
     this.$store.dispatch('clearToCart')
   },

   addNum(row){
     this.$store.dispatch('addNum',{id:row.id})
   },

   reduceNum(row){
    this.$store.dispatch('reduceNum',{id:row.id})
   },

   del(index,row){
   this.$store.dispatch('deletToShop',{id:row.id})
   }

 }

};
</script>

<style lang="less" scoped>
.shop-list {
   width: 500px;
   margin-top: 20px
}

#num{
   margin: 0 10px
}
.total{
   margin-top: 30px;
   text-align: center;
 span{
   margin-right: 20px
 }

}

</style>