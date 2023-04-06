import { useRef, useEffect } from "react"
import { useConversationsStore } from "@/stores/conversations"

export function Prompt() {
    const textAreaRef = useRef()
    const generateComponent = useConversationsStore(state => state.generateComponent)

    async function handleSubmit(event) {
        event.preventDefault()

        //Get formData
        const formData = new FormData(event.target)
        const prompt = formData.get('prompt')
        const language = formData.get('language')
        const framework = formData.get('framework')

        generateComponent({ prompt })


    }
    useEffect(() => {
        textAreaRef.current.focus()
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    ref={textAreaRef}
                    rows={1}
                    name='prompt'
                    type="text"
                    id="UserEmail"
                    placeholder=""
                    className='block w-full text-xl px-4 py-2 border border-gray-600 rounded-lg bg-zinc-900/50 text-white sm:text-sm h-[48px]'
                />
                <button className="">Enviar</button>
            </form>

        </div>

    )
}