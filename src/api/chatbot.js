export default function handler(request, response) {
  const { message } = request.body;

  // Temporary response (later replace with actual chatbot logic)
  response.status(200).json({
    reply: `You said: ${message}`
  });
}