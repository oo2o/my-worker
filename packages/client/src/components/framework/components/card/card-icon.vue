<template>
    <div class="my-card">
    <div class="my-card-icon" :style="styles">
        <div :class="[prefixCls + '-icon']">
            <Icon size="144" :isSpin="isSpin" opacity="0.2" :type="type || 'cog'"></Icon>
        </div>
        <div :class="[prefixCls + '-header']"> {{title || 'Building' }}</div>
        <div :class="[prefixCls + '-footer']"> {{footer || '3' }}</div>
        <slot></slot>
    </div>
    </div>
</template>
<script>
    import Icon from '../icon/index'
    export default {
        name: 'CardIcon',
        components: {
            Icon
        },
        props: {
            bgColor: String,
            title: String,
            footer: [String, Number],
            type: String,
            isSpin: {
                type: Boolean,
                default: false,
            }
        },
        data(){
            return {
                prefixCls: 'my-card-icon'
            }
        },
        computed:{
            styles(){
                let style = {};

                if (this.bgColor) {
                    style['background-color'] = this.bgColor;
                } 

                return style;
            }
        }

    };
</script>
