<template>
    <a :class="classes" @click="handleClick"><slot></slot></a>
</template>
<script>
    const prefixCls = 'my-menu-item';
    import Emitter from '../../mixins/emitter';
     
    export default {
        name: 'MenuItem',
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
            }
        },
        methods: {
            handleClick () {
                if (this.disabled) return;
                this.dispatch('Menu', 'on-menu-item-select', this.name);               
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
