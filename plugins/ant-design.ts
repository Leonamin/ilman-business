import {Button, Input, Dropdown, Switch, Slider, ConfigProvider} from 'ant-design-vue';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Button);
    nuxtApp.vueApp.use(Input);
    nuxtApp.vueApp.use(Dropdown);
    nuxtApp.vueApp.use(Switch)
    nuxtApp.vueApp.use(Slider)
    nuxtApp.vueApp.use(ConfigProvider)
});