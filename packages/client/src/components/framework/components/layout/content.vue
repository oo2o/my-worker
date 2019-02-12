<template>
    <div :class="classes"><slot></slot></div>
</template>
<script>
    export default {
        name: 'Content',
        props:['hasSider'],
        computed: {
            classes(){
                return ['my-layout-content',{
                    'my-layout-has-sider': this.hasSider || false
                }]
            }
        },
    };
</script>