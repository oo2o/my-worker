<template>
    <div class="my-layout-header">
        <div class="my-layout-header-icon">
            <Icon @on-click="handleClick" type="navicon" size="20"></Icon>
        </div>
    <slot></slot></div>
</template>
<script>
    import Icon from '../icon/index'
    import Emitter from '../../mixins/emitter';

    export default {
        name: 'Header',
        components: { Icon },
        mixins: [Emitter],
        methods: {
            handleClick(){
                console.log('on-layout-icon-click')
                this.dispatch('Layout', 'on-layout-icon-click');
            }
        }
    };
</script>