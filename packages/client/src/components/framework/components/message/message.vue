<template>
<transition name="fade">
    
    <div class="my-message" >
       <label><i :class="classes"></i> &nbsp;{{text}}</label>
    </div>
</transition>
</template>

<script>
    export default {
        name: 'Message',
        props: {
            type: String,
            text: [String, Number]
        },
        computed: {
            classes(){
                return [
                    `icon-${this.icons[this.type] || 'info'}`,
                    'my-message-icon',
                    `my-message-icon-${this.type}`
                ]
            }
        },
        data(){
            return {
                icons: {
                    success: 'info',
                    warning: 'info',
                    error: 'close',
                    info: 'info'
                }
            }
        }
    }

</script>