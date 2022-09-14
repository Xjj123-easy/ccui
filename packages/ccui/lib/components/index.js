import Button from './Button.vue';

const componentss = [Button]
const install = (app) => {
    componentss.forEach(v => {
        console.log(v)
        app.component(v.name, v)
    })
    return app
}
export {
    Button
}
export default {
    install
}