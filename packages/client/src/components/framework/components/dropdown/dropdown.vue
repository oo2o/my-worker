<template>
    <div @mouseenter="handleMouseenter" @mouseleave="handleDouseleave" class="my-dropdown">

    <slot name="content"></slot> &nbsp;&nbsp;
    <Icon class="my-dropdown-icon" size="14" color="black" :type="icon" v-if="isIcon"></Icon>
    
    <slot></slot>
    </div>
</template>
<script>
    import Icon from '../icon/index'

    export default {
        name: 'DropDown',
        props: {
            isIcon: {
                type: Boolean,
                default: false
            }
        },
        components: { Icon },
        data(){
            return {
                icon: 'angle-up'
            }
        },
        methods: {  
            handleMouseenter(){
                this.icon = 'angle-down'
            },
            handleDouseleave(){
                this.icon = 'angle-up'
            }
        }
    };
</script>