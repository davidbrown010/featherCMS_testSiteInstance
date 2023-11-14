export const FULL_PATH = (relativeURL: string) => {
    return 'http://' + process.env.DOMAIN! + relativeURL
}