<template>
    <span class="my-tag" :style="styles"><slot></slot>&nbsp;<Icon @on-click="handleClick" class="my-tag-trash my-tag-icon" type="trash" v-if="closeable" size="16"></Icon></span>
</template>

<script>
    import Icon from '../icon/index'
    export default {
        name: 'Tag',
        props: {
            bgColor: String,
            color: String,
            size: [String, Number],
            closeable: {
                type: Boolean,
                default: false
            }
        },
        components: { Icon },
        computed: {
            styles(){
                let style = {}
                if(this.bgColor){
                    style['background-color'] = this.bgColor
                }

                if(this.color){
                    style.color = this.color
                }

                if(this.size){
                    style['font-size'] = this.size
                }

                return style
            }   
        },
        methods: {
            handleClick(e){
                this.$emit('on-click', e)
            }
        }
    }
</script>