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
        { "role": "system", "content": "You are a system that generates code for Ui loadComponents, the user descibes you a component and you only generate the code snipet, without explanations, use html by default" },
        {
            "role": "user", "content": "Crea un boton",
            "role": "assistant", "content":
                "<button>Button>/button>\ninfo:Botón con solo html"
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
            stream: false,
            temperature: 0.0,
            stop: ['\ninfo']
        })
    })
    console.log(response)
    if (!response.ok) return res.status(500).json({ error: "Something went wrong" })

    const { uasage, choices } = await response.json()
    const { content } = choices?.[0]?.message
    console.log(content)

    return res.status(200).json({ content })
}
