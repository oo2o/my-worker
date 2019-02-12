<template>
    <div class="my-pop">
        <div @click="handleClick" :class="[prefixCls + '-button']"><slot name="button"><Icon type="plus" ></Icon></slot></div>
        <div :class="[prefixCls + '-tooltip']" v-if="active">
            <div :class="[prefixCls + '-mask']" @click="handleMaskClick"></div>
            <transition name="fade"> 
            <div :class="[prefixCls + '-wrap']" @click="handleWrapClick">
                <div :class="[prefixCls + '-arrow', prefixCls + '-arrow-border']"></div>
                <div :class="[prefixCls + '-arrow', prefixCls + '-arrow-bg']"></div>
                <div :class="[prefixCls + '-content']">
                    <a :class="[prefixCls + '-close']" v-if="closable" @click="close">
                        <slot name="close">
                            <Icon type="close" size="20" color="#00B4CF"></Icon>
                        </slot>
                    </a>
                    <div :class="[prefixCls + '-header']"><slot name="header">header</slot></div>
                    <div :class="[prefixCls + '-body']"><slot name="body">Body</slot></div>
                    <div :class="[prefixCls + '-footer']" v-if="footerHide">
                    <slot name="footer">
                        <Button @on-click="ok" class="my-pop-button-ok">Add Resources</Button> &nbsp;&nbsp;
                        <Button @on-click="cancle" class="my-pop-button-cancle" type="cancle">Cancel</Button>
                    </slot>
                    </div>
                </div>
            </div>
             </transition>
        </div>        
    </div>
</template> 
<script>
    import Icon from '../icon/index' 
    import Button from '../button/index'
    export default {
        name: 'Pop',
        props: {
            width: {
                type: [String, Number],
            }, 
            height: {
                type: [String, Number],
            },
            showHead: {
                type: Boolean,
                default: true
            },
            footerHide: {
                type: Boolean,
                default: true
            },
            okText: {
                type: String
            },
            cancelText: {
                type: String
            },
            maskClosable: {
                type: Boolean,
                default: true
            },
            closable: {
                type: Boolean,
                default: true
            }
        },
        components: { Icon, Button },
        data(){
            return {
                active: false,
                prefixCls: 'my-pop'
            }
        },
        computed: {
            wrapClasses(){
                return [
                    `${this.prefixCls}-wrap`,
                    {
                        [`${this.prefixCls}-hidden`]: !this.wrapShow,
                    }
                ];
            }
        },
        methods: {
            handleClick(){
                this.active = !this.active
            },
            cancle(){
                this.active = false
                this.$emit('on-cancle');
            },
            mask(){
                this.cancle()
            },
            handleWrapClick(){
                const className = event.target.getAttribute('class');
                if (className && className.indexOf(`${this.prefixCls}-wrap`) > -1) this.mask();
            },
            handleMaskClick(){
                const className = event.target.getAttribute('class');
                if (className && className.indexOf(`${this.prefixCls}-mask`) > -1) this.mask();
            },
            close(){
                this.cancle()
            },
            ok(){
                this.$emit('on-ok');
                this.active = false
            }
        },
    };
</script>
