export default function handler(request, response) {
  const { name, email, phone, course, experience, query } = request.body;
  
  // Log the submission (in a real app, you would save this to a database)
  console.log("Application Submitted:", { name, email, phone, course, experience, query });
  
  // Send a success response
  response.status(200).json({ 
    message: "Application received successfully", 
    data: { name, email, phone, course } 
  });
}