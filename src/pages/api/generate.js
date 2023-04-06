const { OPENAI_API_KEY } = process.env

const API_URL = "https://api.openai.com/v1/chat/completions"

export default async function handler(req, res) {
    console.log("new request")
    if (req.method !== "GET") return res.status(405).end()

    const { prompt, language, framework } = req.query

    if (!prompt) return res.status(400).json({ error: "Prompt is required" })
    if (!language) return res.status(400).json({ error: "language is required" })
    if (!framework) return res.status(400).json({ error: "framework is required" })

    console.log("Campos válidos")

    const messages = [
        { "role": "system", "content": "You are a system that generates code for Ui loadComponents, the user descibes you a component and you generate the code for it" },
        { "role": "user", "content": "Genara un botón con el logo de twitch que aparexca el texto 'Sígueme en Twitch' con HTML y Tailwind" },
        {
            "role": "assistant", "content":
                "<a href='https://twitch.tv/midudev' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-4 py-2 gap-x-2 text-xs leading-6 whitespace-no-wrap transition font-bold duration-150 ease-in-out rounded-full  lg:text-base xl:text-lg text-white bg-purple-700 hover:bg-purple-500 focus:border-purple-800  active:bg-purple-800'><svg class='w-6 h-6 fill-current' viewBox='0 0 24 24'><path d='M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0 1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z'></path></svg>Sígueme en Twitch</a>"
        }
    ]

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [...messages, { role: 'user', content: prompt }],
            stream: false
        })
    })
    console.log(response.ok)
    if (!response.ok) return res.status(500).json({ error: "Something went wrong" })

    const data = await response.json()
    console.log(data)

    return res.status(200).json({ data })
}
