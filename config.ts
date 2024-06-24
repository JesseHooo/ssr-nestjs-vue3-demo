import type { UserConfig } from 'ssr-types'

const userConfig: UserConfig = {
    serverPort: 14003,
    isVite: true,
    viteConfig: () => {
        return {
            client: {
                otherConfig: {
                    build: { sourcemap: true }
                }
            }
        }
    }
}

export { userConfig }
