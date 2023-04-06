import { useRef, useEffect } from "react"

export function Prompt() {
    const textAreaRef = useRef()

    async function handleSubmit(event) {
        event.preventDefault()

        //Get formData
        const formData = new FormData(event.target)
        const prompt = formData.get('prompt')

        const response = await fetch(`/api/generate?prompt=${prompt}&language=javascript&framework=react`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }

        })
        if (!response.ok) console.log("ERROR")

        console.log(response)

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