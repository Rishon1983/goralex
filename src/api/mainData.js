/**
 * Mocking client-server processing
 */
const msg = 'Add your message:'

export default {
    getMainMsg (cb) {
        setTimeout(() => cb(msg), 5000)
    }
}