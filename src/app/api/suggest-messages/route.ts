import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


export async function POST(request: Request) {
	try {
		const prompt =
			"Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";

		const completion = await groq.chat.completions.create({
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
		});

		return Response.json({
			response: completion.choices[0]?.message?.content
		}, { status: 200 })

	} catch (error) {
		console.error("OpenAI Error: ", error)
		return Response.json({
			error: "Failed to process request"
		}, { status: 500 })
	}
}