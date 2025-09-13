import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


export async function POST(request: Request) {
	try {
		const prompt =
			"Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";


		const stream = await groq.chat.completions.create({
			messages: [
				{
					role: "system",
					content: "Always follow formatting rules strictly. Only output the three questions separated by '||'.",
				},
				{
					role: "user",
					content: prompt,
				},
			],
			model: "openai/gpt-oss-20b",
			stream: true
		});

		const encoder = new TextEncoder()

		const readable = new ReadableStream({
			async start(controller) {
				for await (const chunks of stream) {
					const content = chunks.choices[0]?.delta?.content || ""
					if (content) {
						controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
					}
				}
				controller.close()
			}
		})

		return new Response(readable, {
			headers: {
				'Content-Type': "text/event-stream",
				'Cache-Control': "no-cache",
				'Connection': "keep-alive"
			}
		})

	} catch (error) {
		console.error("Groq Error: ", error)
		return Response.json({
			error: "Failed to process request"
		}, { status: 500 })
	}
}