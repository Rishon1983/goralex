/**
 * Mocking client-server processing
 */
const _msg = 'Add your message:'

export default {
    getMainMsg(cb) {
        setTimeout(() => cb(_msg), 3000)
    }
}