// 注册 modal 组件
Vue.component('modal', {
    props: ['modalMsg'],
    methods : {
        modalButtonCancel : function () {
            this.$emit("modal-click","OK");
        },
        modalButtonDel : function () {
            this.$emit("modal-del","No");
        }
    },
    template: '<div class="flex cross-center didi-dialog-wrap">'+
                    '<div class="didi-dialog-box">'+
                        '<p class="didi-dialog-p">'+
                            '{{ modalMsg }}'+
                        '</p>'+
                        '<div class="didi-dialog-footer">'+
                            '<button type="button" class="btn-bule" @click="modalButtonCancel">取消</button>'+
                            '<button type="button" class="btn-red" @click="modalButtonDel">确定</button>'+
                        '</div>'+
                    '</div>'+
               '</div>',
    beforeCreate : function() {
        // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
        console.log("created 之前");
    },
    created : function() { //在实例创建完成后被立即调用。
        console.log("已经 created");
    },
    beforeMount : function() { //在挂载开始之前被调用：相关的 render 函数首次被调用。
        console.log("beforeMount 之前");
    },
    mounted : function() { //el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
        console.log("已经 mounted");
    },
    beforeUpdate : function() { //数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
        console.log("update 之前");
    },
    updated : function() { //由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
        console.log("已经 updated");
    },
    activated : function() { //keep-alive 组件激活时调用。
        console.log("activated");
    },
    deactivated : function() { //keep-alive 组件停用时调用。
        console.log("deactivated");
    },
    beforeDestroy : function() { //实例销毁之前调用。在这一步，实例仍然完全可用。
        console.log("beforeDestroy");
    },
    destroyed : function() { //Vue 实例销毁后调用。
        console.log("destroyed");
    }
});
