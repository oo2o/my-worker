<template>
    <div class="my-menu"><slot></slot></div>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    export default {
        name: 'Menu',
        mixins: [ Emitter ],
        props: {
            activeName: {
                type: [String, Number]
            },
            width: {
                type: String,
                default: '240px'
            }
        },
        data () {
            return {
                currentActiveName: this.activeName,
                openedNames: []
            };
        },
        computed: {
            styles () {
                let style = {};

                return style;
            }
        },
        methods: {
            updateActiveName () {
                if (this.currentActiveName === undefined) {
                    this.currentActiveName = -1;
                }
                this.broadcast('MenuItem', 'on-update-active-name', this.currentActiveName);
            },
        },
        mounted () {
            this.updateActiveName();
            this.$on('on-menu-item-select', (name) => {
                this.currentActiveName = name;
                this.$emit('on-select', name);
            });
        },
        watch: {
            activeName (val) {
                this.currentActiveName = val;
            },
            currentActiveName () {
                this.updateActiveName();
            }
        }
    };
</script>