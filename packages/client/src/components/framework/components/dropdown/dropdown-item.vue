<template>
    <a :class="classes" @click="handleClick"><slot></slot></a>
</template>
<script>
    const prefixCls = 'my-dropdown-item';
    import { findComponentUpward } from '../../utils/assist';
    export default {
        name: 'DropdownItem',
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
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-selected`]: this.selected,
                        [`${prefixCls}-divided`]: this.divided
                    }
                ];
            }
        },
        methods: {
            handleClick () {
                const $parent = findComponentUpward(this, 'DropDown');
                // const hasChildren = this.$parent && this.$parent.$options.name === 'DropDown';
                $parent.$emit('on-click', this.name);
            },
        }
    };
</script>
