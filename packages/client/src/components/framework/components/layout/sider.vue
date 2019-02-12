<template>
    <div :class="classes">
    <div class="my-layout-sider-icon"> <Icon @on-click="handleClose" size="14" type="close"></Icon></div>
    <slot></slot>
    </div>
</template>
<script>
    import Icon from '../icon/index'
    import Emitter from '../../mixins/emitter';
    export default {
        name: 'Sider',
        mixins: [Emitter],
        components: { Icon },
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                isShow: this.value,
            }
        },
        mounted(){
            this.$on('on-update-sider', () => {
                this.isShow = true
                this.$emit('input', true);
            });
        },
        methods: {
            handleClose(){
                this.isShow = false
            }
        },
        computed: {
            classes(){
                return [
                    'my-layout-sider',
                    { 'my-layout-sider-show': this.isShow }
                ]
            }
        },
        watch: {
            value(val){
                this.isShow = val;
            }
        }
    };
</script>