<template>
    <div class="my-layout"><slot></slot></div>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    export default {
        name: 'Layout',
        mixins: [Emitter],
        mounted () {            
            this.$on('on-layout-icon-click', () => {
                console.log('on-layout-icon-click')
                this.broadcast('Sider', 'on-update-sider');
            });
        },
    };
</script>