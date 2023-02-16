export const generateId = () => {
    const random = Math.random().toString(36).slice()
    const date = Date.now().toString(36)

    return random + date
}