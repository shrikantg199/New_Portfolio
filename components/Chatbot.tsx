"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, MessageCircle, X, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const assistantIntro = `Hi, I'm Shrikant Gaikwad's AI assistant, powered by Google Gemini. I can help you learn more about Shrikant's professional background, skills, projects, and experience.

I can provide information about:
- Professional experience and work history
- Technical skills and expertise
- Projects and accomplishments
- Education background
- Contact information

Feel free to ask me any questions about Shrikant's career and qualifications!`;

  // Initialize messages - always start fresh without previous messages
  useEffect(() => {
    // Always start with the welcome message only
    const welcomeMessage: Message = {
      id: "1",
      text: assistantIntro,
      isUser: false,
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);

    // Clear any saved messages
    localStorage.removeItem("chatbotMessages");
  }, []);

  // Removed localStorage saving functionality as per user request;

  // Enhanced function to clean and format messages
  const formatMessage = (text: string) => {
    return (
      text
        // Handle list items with asterisks
        .replace(/^\*\s+/gm, "• ") // Convert leading "* " to bullet points
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>") // Convert **text** to <strong>text</strong>
        .replace(/\*([^*]+)\*/g, "<em>$1</em>") // Convert *text* to <em>text</em>
        .replace(/\n/g, "<br />") // Convert newlines to <br /> tags
        // Clean up any remaining stray asterisks
        .replace(/\*/g, "")
    );
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (scrollViewport) {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }
    }
  }, [messages]);

  // Clear all messages and reset to initial state
  const clearMessages = () => {
    const welcomeMessage: Message = {
      id: "1",
      text: assistantIntro,
      isUser: false,
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: input }),
      });

      if (!res.ok) {
        // Log more detailed error information
        const errorText = await res.text();
        console.error(`HTTP error! status: ${res.status}`, errorText);
        throw new Error(`HTTP error! status: ${res.status} - ${errorText}`);
      }

      const data = await res.json();
      console.log("Chatbot response:", data);

      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply || data.message || data.text || "No response received",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);

      // Add error message
      let errorText =
        "Sorry, I'm having trouble connecting. Please try again later.";

      if (error instanceof Error) {
        if (
          error.message.includes("ECONNREFUSED") ||
          error.message.includes("Failed to fetch")
        ) {
          errorText =
            "I'm unable to connect to my knowledge base right now. Please check your connection or try again later.";
        } else if (error.message.includes("HTTP error!")) {
          errorText = `Connection error: ${error.message}`;
        }
      }

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorText,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating chat icon - always visible */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 shadow-lg relative"
          size="icon"
        >
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageCircle className="h-6 w-6" />
            )}
          </motion.div>
        </Button>
      </div>

      {/* Chat window - shown when isOpen is true */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: "100%",
              y: "100%",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0,
              x: "100%",
              y: "100%",
              transition: { duration: 0.2 },
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed bottom-20 right-14 z-40 origin-bottom-right"
          >
            <Card className="w-full max-w-md bg-background border rounded-lg shadow-lg overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 border-b">
                <CardTitle className="text-lg font-semibold">
                  Shrikant's Assistant
                </CardTitle>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={clearMessages}
                    className="h-8 w-8"
                    title="Clear chat"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 lg:hidden"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <ScrollArea className="h-64 p-4" ref={scrollAreaRef}>
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.isUser
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}
                        >
                          <div
                            className="text-sm whitespace-pre-wrap"
                            dangerouslySetInnerHTML={{
                              __html: formatMessage(message.text),
                            }}
                          />
                          <p
                            className={`text-xs mt-1 ${message.isUser ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                          >
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                    {loading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-muted rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"></div>
                            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce delay-75"></div>
                            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce delay-150"></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </ScrollArea>

                <form
                  onSubmit={handleSubmit}
                  className="flex gap-2 p-4 border-t"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about Shrikant's background..."
                    disabled={loading}
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    disabled={loading || !input.trim()}
                    size="icon"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
