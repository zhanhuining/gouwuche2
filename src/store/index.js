import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    // 模拟商品列表数据
    shop_list: [{ id: 11, name: '鱼香肉丝', price : 12}, 
                { id: 22, name: '宫保鸡丁', price : 14}, 
                { id: 34, name: '土豆丝', price : 10}, 
                { id: 47, name: '米饭', price : 2}, 
                { id: 49, name: '蚂蚁上数', price : 13}, 
                { id: 50, name: '腊肉炒蒜薹', price : 15}],
     // 购物车
     add : []
   },
   getters: {
      // 获取商品列表
      getShopList: state => state.shop_list,
      // 获取购物车列表
       addShopList: state => {
            // map()方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
          return state.add.map(({ id, num }) => {
            let product = state.shop_list.find(item =>item.id == id)// find()方法返回通过测试(函数内判断)的数组的第一个元素的值，如果没有符合条件的元素返回undefined
              if (product) {//    如果存在该商品
                return {//  返回对象
                    ...product,
                   num
                 }
               }
          })
      },
      // 获取总数量
      totalNum: (state, getters) => {
         let total = 0
         getters.addShopList.map(item => { 
             total += item.num
          })
          return total
      },
      // 计算总价格
     totalPrice: (state, getters) => { 
        let total = 0
         getters.addShopList.map(item => { 
             total += item.num * item.price
         })
         return total
       }
   },
   mutations: {
      // 加入购物车
    addCart(state, { id,name,price}){ 
       let record = state.add.find(item => item.id == id)
       if (!record) {//   如果购物车中不存在该商品
         state.add.push({//  追加商品
             id,
             name,
             price,
             num : 1
           })
       } else { // 如果商品已经加入购物车，则改变数量
          record.num++
       }
     },
    // 删除单个物品
   deletShop(state, product) { 
      state.add.forEach((item,index) => { 
         if (item.id == product.id) {//  如果找到该商品 
            state.add.splice(index,1)
           }
     })
    },
    // 清空购物车
   clearCart(state) { 
        state.add = []
    },
    // 单个商品数量++
    addNum(state,{id}){
      let record=state.add.find(item=>item.id==id);
      record.num ++;
    },
    // 单个商品数量--
    reduceNum(state,{id}){
      let record=state.add.find(item=>item.id==id);
      record.num--;
    }
  },
  actions: {
     // 加入购物车
   addToCart({ commit},product) { 
       commit('addCart', {
         id : product.id,
         name:product.name,
         price:product.price,
         num:product.num
       })
    },
     // 清空购物车
    clearToCart({commit}) { 
        commit('clearCart')
    },
     // 删除单个物品
     deletToShop({commit},product) { 
      commit('deletShop',product)
      },
      // 单个商品数量++
      addNum({commit},product){
        commit('addNum',{
          id:product.id
        })
      },
      // 单个商品数量--
      reduceNum({commit},product){
        commit('reduceNum',{
          id:product.id
        })
      },
   },
  modules: {
  
  }
})
