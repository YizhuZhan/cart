/* eslint-disable eslint-comments/disable-enable-pair *//* eslint-disable linebreak-style */
/* eslint-disable init-declarations */
/* eslint-disable require-jsdoc */
import Notice from "./message.js"

let instance

function notice({ content = "", duration = 1.5 }) {
    instance = instance || Notice.newInstance()
    instance.add({ content, duration })
}

export default notice
