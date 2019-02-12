
import Button from './components/button'
import Card from './components/card';
import DropDown from './components/dropdown';
import Icon from './components/icon';
import Input from './components/input';
import Layout from './components/layout';
import Menu from './components/menu';
import Message from './components/message';
import Pop from './components/pop';
import Tab from './components/tab';
import Tag from './components/tag'

const components = {
    Button,
    Card,
    CardIcon: Card.CardIcon,
    CardTotal: Card.CardTotal,
    CardTotalItem: Card.CardTotalItem,
    DropDown,
    DropDownItem: DropDown.DropDownItem,
    DropDownMenu: DropDown.DropDownMenu,
    Icon,
    Input,
    Layout,
    Header: Layout.Header,
    Sider: Layout.Sider,
    Content: Layout.Content,
    Footer: Layout.Footer,
    ContentRight: Layout.ContentRight,
    Menu,
    MenuItem: Menu.MenuItem,
    Message,
    Pop,
    Tab,
    TabItem: Tab.TabItem,
    Tag
};

const install = function(Vue) {
    if (install.installed) return;

    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });

    Vue.prototype.$Message = Message;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: process.env.VERSION || '1.0.0', // eslint-disable-line no-undef
    install,
    ...components
};
export default API; // eslint-disable-line no-undef
