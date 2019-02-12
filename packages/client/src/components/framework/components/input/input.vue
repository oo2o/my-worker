<template>
    <div class="my-input-div" >
        <Icon type="search" class="my-input-search-icon" v-if="isIcon && showIcon"></Icon>
        <input 
            :type="type || ''"
            :placeholder="placeholder"
            @keyup.enter="handleEnter"
            @keyup.exact="handleKeyup"
            @keypress="handleKeypress"
            @keydown="handleKeydown"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="handleInput"
            :value="currentValue" :class="classes" />
    </div> 
</template>

<script>
    import Icon from '../icon/index'
    export default {
        name: 'Input',
        props: {
            value: [ Number, String ],
            search: {
                type: Boolean,
                default: false
            },
            isIcon: {
                type: Boolean,
                default: false
            },
            placeholder: [String, Number],
            type: String

        },
        components: { Icon },
        data(){
            return {
                currentValue: this.value,
                showIcon: true,
            }
        },
        computed: {
            classes(){
                return [
                    'my-input',
                    { 'my-input-search' : this.search }
                ]
            }
        },
        watch: {
            value(val){
                this.currentValue = val
                this.showIcon = val.length > 0 ? false : true
            }
        },
        methods: {
            handleEnter (event) {
                this.$emit('on-enter', event);
            },
            handleKeydown (event) {
                this.$emit('on-keydown', event);
            },
            handleKeypress(event) {
                this.$emit('on-keypress', event);
            },
            handleKeyup (event) {
                this.$emit('on-keyup', event);
            },
            handleIconClick (event) {
                this.$emit('on-click', event);
            },
            handleFocus (event) {
                this.$emit('on-focus', event);
            },
            handleBlur (event) {
                this.$emit('on-blur', event);
            },
            handleInput (event) {
                let value = event.target.value;
                this.$emit('input', value);
                if (value !== this.currentValue){
                    this.currentValue = value
                }
                this.$emit('on-change', event);
            },
            handleChange (event) {
                this.$emit('on-input-change', event);
            },
        }
    }
</script>