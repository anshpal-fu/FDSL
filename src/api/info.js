export default function handler(request, response) {
  const { name, email, interest, query } = request.body;
  
  // Log the submission (in a real app, you would save this to a database)
  console.log("Info Request Submitted:", { name, email, interest, query });
  
  // Send a success response
  response.status(200).json({ 
    message: "Info request received successfully", 
    data: { name, email, interest } 
  });
}