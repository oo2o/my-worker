<template>
    <a :class="classes" :style="styles" @click="handleClick"><slot></slot></a>
</template>
<script>
    const prefixCls = 'my-tab-item';
    import Emitter from '../../mixins/emitter';
     
    export default {
        name: 'TabItem',
        mixins: [Emitter],
        props: {
            name: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Boolean,
                default: false
            },
            divided: {
                type: Boolean,
                default: false
            },
            width: {
                type: [String, Number]
            }
        },
        data () {
            return {
                active: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-active`]: this.active,
                        [`${prefixCls}-selected`]: this.selected,
                        [`${prefixCls}-disabled`]: this.disabled,
                    }
                ];
            },
            styles(){
                return this.width? { width: this.width + 'px'} : {}
            }
        },
        methods: {
            handleClick () {
                if (this.disabled) return;
                this.dispatch('Tab', 'on-tab-item-select', this.name);               
            },
        },
        mounted () {
            this.$on('on-update-active-name', (name) => {
                if (this.name === name) {
                    this.active = true;
                } else {
                    this.active = false;
                }
            });
        }
    };
</script>
