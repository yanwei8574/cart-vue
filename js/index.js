var app =
  	new Vue({
        el: '#app',
        data: {
          title : '购物车',
          cartData :[],
          checkedAll : false,
          totalAmount :0,
          actionShow : true
        },
        filters:{

        },
        methods: {
          changeMoney : function (goods,way) {
            if(way > 0){
              goods.goods_number++;
            }
            else{
              goods.goods_number--;
              if(goods.goods_number < 1){
                goods.goods_number = 1;
              }
            }
            this.totalPrice();
          },
          selectClick : function (item) {
            if(typeof item.checked === 'undefined'){
              this.$set(item,"checked",true);
            }
            else {
              item.checked = !item.checked;
            }
            this.totalPrice();
          },
          selectClickAll : function (flag) {
            this.checkedAll = flag;
            var _this = this;
            this.cartData.forEach(function (item,index) {
              if(typeof item.checked === 'undefined'){
                _this.$set(item,"checked",_this.checkedAll);
              }
              else {
                item.checked = _this.checkedAll;
              }
            });
            this.totalPrice();
          },
          totalPrice : function () {
            var _this = this;
            this.totalAmount =0;
            this.cartData.forEach(function (item,index) {
              if(item.checked){
                _this.totalAmount += item.shop_price * item.goods_number;
              }
            });
          },
          editClick : function () {
            this.actionShow = false ;
          },
          doneClick : function () {
            this.actionShow = true ;
          },
          selectDelete : function (index) {
            this.cartData.splice(index,1);
        },
        watch: {

				},
        created: function () {
          var _this = this ;
            axios({
                method: 'post',
                url: './js/cartList.json'
            }).then( function (response) {
              _this.cartData = response.data.data;
              console.log(_this.cartData);

            }).catch( function (error) {
                console.log(error);
            });
        },
        mounted: function () {
        }
  	});
