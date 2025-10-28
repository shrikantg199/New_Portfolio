import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const n8nWebhook = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL; // Fixed to match env var
  
  if (!n8nWebhook) {
    console.error('NEXT_PUBLIC_N8N_WEBHOOK_URL is not defined in environment variables');
    return NextResponse.json({ reply: "Server configuration error." }, { status: 500 });
  }

  try {
    const body = await req.json();
    console.log('Received request body:', body);
    
    // Log the webhook URL for debugging
    console.log('n8n webhook URL:', n8nWebhook);
    
    const response = await fetch(n8nWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // Check if the response is ok before trying to parse JSON
    if (!response.ok) {
      console.error(`n8n webhook error: ${response.status} ${response.statusText}`);
      return NextResponse.json({ reply: `Webhook error: ${response.status} ${response.statusText}` }, { status: 500 });
    }

    const data = await response.json();
    console.log("n8n response:", data);
    
    // Handle various possible response structures from n8n
    let reply = "";
    if (typeof data === "string") {
      reply = data;
    } else if (data.output) {
      reply = data.output;
    } else if (data.message) {
      reply = data.message;
    } else if (data.text) {
      reply = data.text;
    } else {
      // If we can't find a suitable field, stringify the whole response
      reply = typeof data === "object" ? JSON.stringify(data, null, 2) : String(data);
    }
    
    return NextResponse.json({ reply });

  } catch (err) {
    console.error('Chatbot API error:', err);
    
    // Provide a more helpful error message
    if (err instanceof Error && err.message.includes('ECONNREFUSED')) {
      return NextResponse.json({ 
        reply: "I'm currently unable to connect to my knowledge base. Please make sure the backend service is running or try again later." 
      }, { status: 500 });
    }
    
    return NextResponse.json({ reply: "Server error. Please try again." }, { status: 500 });
  }
}

// Handle non-POST methods
export function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}