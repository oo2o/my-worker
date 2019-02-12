<template>
    <i @click="handleClick" :class="classes" :style="styles"></i>
</template>
<script>
    const prefixCls = 'my-icon';

    export default {
        name: 'Icon',
        props: {
            type: String,
            size: [Number, String],
            color: String,
            bgColor: String,
            opacity: [Number, String],
            isSpin: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls} icon-${this.type}`,
                    { [`${prefixCls}-spin`]: this.isSpin }
                ] ;
            },
            styles () {
                let style = {};

                if (this.size) {
                    style['font-size'] = `${this.size}px`;
                }

                if (this.color) {
                    style.color = this.color;
                }

                if(this.opacity) {
                    style.opacity = this.opacity
                }  

                if(this.bgColor){
                    style['background-color'] = this.bgColor
                } 

                return style;
            }
        },
        methods: {
            handleClick(e){
                console.log('aa')
                this.$emit('on-click', e)
            }
        }
    };
</script>
