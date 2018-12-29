window.Global={
    city:null,
    battle:null,
    dungeon:null,
    friend:null,
    shop:null,
    strategy:null,
    change:function(params) {
        if(params != 1){
            this.city.node.getComponent(cc.Sprite).spriteFrame=this.city.city_3;
        }
        if(params != 2){
            this.battle.node.getComponent(cc.Sprite).spriteFrame=this.battle.battle_3;
        }
        if(params != 3){
            this.dungeon.node.getComponent(cc.Sprite).spriteFrame=this.dungeon.dungeon_3;
        }
        if(params != 4){
            this.friend.node.getComponent(cc.Sprite).spriteFrame=this.friend.friend_3;
        }
        if(params != 5){
            this.shop.node.getComponent(cc.Sprite).spriteFrame=this.shop.shop_3;
        }
        if(params != 6){
            this.strategy.node.getComponent(cc.Sprite).spriteFrame=this.strategy.strategy_3;
        }
    }
}