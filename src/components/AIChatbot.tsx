import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, Send, MessageCircle, Loader2, Bot } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! 👋 I'm Erivins Company's AI assistant. I'm here 24/7 to help you with:\n\n• Event planning questions\n• Service information\n• Pricing and packages\n• Venue recommendations\n• Booking inquiries\n\nHow can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // System prompt that gives the AI context about your business
  const systemPrompt = `You are a helpful AI assistant for Erivins Company, a premier event planning and management company based in Nairobi, Kenya. 

COMPANY INFORMATION:
- Company: Erivins Company (& Erivins Company)
- Location: Nairobi, Kenya (serving all of Kenya)
- Contact: 
  * Phone: 0727 937 010 / 0721 320 787
  * Email: info@erivinscompany.co.ke / events@erivinscompany.co.ke
  * WhatsApp: 0727 937 010
- Business Hours: Mon-Fri 9AM-6PM, Sat 10AM-4PM, Sun by appointment

SERVICES OFFERED:
1. Wedding Planning (Modern & Traditional)
   - Complete wedding coordination
   - Venue selection and setup
   - Décor and styling
   - Catering coordination
   - Entertainment booking
   
2. Corporate Events
   - Product launches
   - Company celebrations
   - Team building events
   - Conferences and seminars
   - Gala dinners
   
3. Private Events
   - Birthday parties
   - Anniversaries
   - Graduation celebrations
   - Family reunions
   
4. Event Rentals
   - Tents and marquees
   - Tables and chairs
   - Décor items
   - Sound and lighting equipment

PRICING APPROACH:
- Custom quotes based on event size, type, and requirements
- Packages available for different budget ranges
- Free initial consultations
- Flexible payment plans available

YOUR ROLE:
- Be friendly, professional, and helpful
- Answer questions about services, pricing, and availability
- Collect basic information for serious inquiries (name, event type, date, guest count)
- Encourage users to contact the team directly for detailed quotes
- If you don't know something specific, offer to connect them with the team
- Always be positive about the company's capabilities
- Use a warm, conversational tone
- Keep responses concise but informative

IMPORTANT GUIDELINES:
- Never make up specific prices - always say quotes are customized
- For booking requests, collect details and direct them to contact the team
- If asked about availability for specific dates, suggest contacting the team directly
- Emphasize the company's experience and quality service
- Be culturally sensitive, especially for traditional weddings

If someone wants immediate assistance, suggest:
1. WhatsApp (fastest): 0727 937 010
2. Phone call during business hours
3. Email for detailed inquiries

Remember: You're here to help, inform, and guide potential clients toward booking with Erivins Company!`;

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    // Add user message to chat
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage("");
    setIsLoading(true);

    try {
      // Prepare conversation history for Claude
      const conversationHistory = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      // Call Claude API with proper authentication
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1024,
          system: systemPrompt,
          messages: [
            ...conversationHistory,
            {
              role: "user",
              content: currentInput,
            },
          ],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("API Error:", response.status, errorData);
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      // Validate response structure
      if (!data.content || !Array.isArray(data.content) || data.content.length === 0) {
        throw new Error("Invalid response format from API");
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.content[0].text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "I apologize, but I'm having trouble connecting right now. Please try contacting us directly:\n\n📱 WhatsApp: 0727 937 010\n📞 Phone: 0727 937 010 / 0721 320 787\n📧 Email: info@erivinscompany.co.ke",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Chat Button - Fixed position */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle className="w-7 h-7" />
          {/* Notification pulse */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-white"></span>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] shadow-2xl flex flex-col animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Erivins AI Assistant</h3>
                <p className="text-xs text-primary-foreground/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Online 24/7
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.role === "user"
                      ? "bg-accent text-accent-foreground"
                      : "bg-background border border-border"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.role === "user"
                        ? "text-accent-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-background border border-border rounded-2xl p-3 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm text-muted-foreground">Typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input */}
          <div className="p-4 border-t border-border bg-background">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !inputMessage.trim()}
                size="icon"
                className="bg-accent hover:bg-accent/90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Powered by AI • Always here to help 🤖
            </p>
          </div>
        </Card>
      )}
    </>
  );
};

export default AIChatbot;