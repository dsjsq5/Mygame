
cc.Class({
    extends: cc.Component,

    properties: {
        
        city_1:{
            default:null,
            type:cc.SpriteFrame
        },
        city_2:{
            default:null,
            type:cc.SpriteFrame
        },
        city_3:{
            default:null,
            type:cc.SpriteFrame
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        Global.city=this;
        this.node.getComponent(cc.Sprite).spriteFrame = this.city_1;
    },

    start () {
    },

    // update (dt) {},

    onclick:function () {
        this.node.getComponent(cc.Sprite).spriteFrame = this.city_1;
        Global.change(1);
        Global.main_city.node.active=true;
        // var self = this;
        // cc.loader.loadRes("texture/bottom/city_1", cc.SpriteFrame, function (err, spriteFrame) {
        //     self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        // });
    }
});
