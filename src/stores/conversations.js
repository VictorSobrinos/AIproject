import { create } from 'zustand'
import { APIS } from '@/config/consts'

export const useConversationsStore = create(set => ({
    response: null,
    isReplying: false,
    generateComponent: async ({ prompt, language = 'javascript', framework = 'react' }) => {
        set({ ísReplying: true })
        const url = `${APIS.GENERATE}?prompt=${prompt}&language=${language}&framework=${framework}`
        console.log(url)
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }

        })
        console.log(response)
        const { content } = await response.json()
        //alert(content)
        set({
            isReplying: false,
            response: content
        })
    }
}))