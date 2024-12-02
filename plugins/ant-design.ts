import { Button, Input, Dropdown } from 'ant-design-vue';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Button);
    nuxtApp.vueApp.use(Input);
    nuxtApp.vueApp.use(Dropdown);
});