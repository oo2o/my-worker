import Message from './message.vue'
import Vue from 'vue'

Message.newInstance = properties => {
    const _props = properties || {};

    const Instance = new Vue({
        data: _props,
        render (h) {
            return h(Message, {
                props: _props
            });
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    setTimeout( () => {
        document.body.removeChild(component.$el)
    }, 2000)

    return {
        remove(){
            document.body.removeChild(component.$el)
        }
    };
};

export default Message;

