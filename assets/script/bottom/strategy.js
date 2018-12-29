// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        strategy_1:{
            default:null,
            type:cc.SpriteFrame
        },
        strategy_2:{
            default:null,
            type:cc.SpriteFrame
        },
        strategy_3:{
            default:null,
            type:cc.SpriteFrame
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        Global.strategy=this;
    },

    start () {

    },

    // update (dt) {},

    onclick:function () {
        this.node.getComponent(cc.Sprite).spriteFrame = this.strategy_1;
        Global.change(6);
        // var self = this;
        // cc.loader.loadRes("texture/bottom/strategy_1", cc.SpriteFrame, function (err, spriteFrame) {
        //     self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        // });
    }
});
