/*import './assets/main.css'

import { createApp } from 'vue'
import App from './components/ComponenteHijo.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

createApp(App).mount('#app')*/

/*import { createApp} from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import {createPinia} from "pinia"
import App from '../client/components/ComponentePadre.vue'

const app = createApp(App)
//createApp(app).mount('#app')
app.use(createPinia)
app.mount('#app')*/

import { createApp} from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import {createPinia} from "pinia"
import App from '../client/components/ComponentePadre.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.mount('#app')

app.get("/hello", (req, res) => {
    res.send("Hello!");
    });
    app.post("/sum", (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a + b });
});
    
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

    