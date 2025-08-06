import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Download,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
  isOption?: boolean;
}

interface RequirementData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  propertySize: string;
  frequency: string;
  additionalDetails: string;
  timestamp: Date;
}

const predefinedQAs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive cleaning services including:\n• Commercial Deep Cleaning (₹5,000+)\n• Restaurant Kitchen Cleaning (₹8,000+)\n• Industrial Facility Cleaning (₹12,000+)\n• Office Cleaning & Sanitization\n• Eco-friendly cleaning solutions"
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Pune, PCMC, and surrounding IT Hubs including:\n• Pune City\n• Pimpri-Chinchwad (PCMC)\n• IT Parks & Corporate Zones\n• Industrial Areas\n• Commercial Districts"
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing varies by service type:\n• Commercial Cleaning: Starting ₹5,000\n• Restaurant Cleaning: Starting ₹8,000\n• Industrial Cleaning: Starting ₹12,000\n\nPrices depend on property size, cleaning frequency, and specific requirements. Contact us for a free quote!"
  },
  {
    question: "Are you available 24/7?",
    answer: "Yes! We provide 24/7 emergency cleaning services. Our regular business hours are flexible, and we can work around your schedule to minimize disruption to your operations."
  },
  {
    question: "Do you use eco-friendly products?",
    answer: "Absolutely! We use advanced, eco-friendly cleaning products that are safe for the environment and your health. All our solutions are non-toxic and biodegradable."
  },
  {
    question: "How can I get a quote?",
    answer: "Getting a quote is easy:\n• Call us directly: 92094 47145\n• Use our requirement form in this chat\n• Visit our Contact page\n• WhatsApp us for instant response\n\nWe offer free consultations and site visits!"
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isCollectingRequirements, setIsCollectingRequirements] = useState(false);
  const [requirementStep, setRequirementStep] = useState(0);
  const [requirementData, setRequirementData] = useState<Partial<RequirementData>>({});
  const [allRequirements, setAllRequirements] = useState<RequirementData[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const requirementQuestions = [
    { field: 'name', question: "What's your name?", placeholder: "Enter your full name" },
    { field: 'email', question: "What's your email address?", placeholder: "Enter your email" },
    { field: 'phone', question: "What's your phone number?", placeholder: "Enter your phone number" },
    { field: 'serviceType', question: "What type of cleaning service do you need?", options: ["Commercial Cleaning", "Restaurant Cleaning", "Industrial Cleaning", "Office Cleaning"] },
    { field: 'propertySize', question: "What's the size of your property?", placeholder: "e.g., 2000 sq ft" },
    { field: 'frequency', question: "How often do you need cleaning?", options: ["One-time", "Weekly", "Bi-weekly", "Monthly"] },
    { field: 'additionalDetails', question: "Any additional details or special requirements?", placeholder: "Describe any specific needs..." }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage("👋 Hi! I'm the SK Cleaning Services assistant. I'm here to help you with:\n\n🤖 Answers to common questions\n📋 Collecting your cleaning requirements\n📞 Connecting you with our team\n\nHow can I assist you today?", true);
    }
  }, [isOpen]);

  // Prevent body scroll when chatbot is open on mobile
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll on mobile
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Restore body scroll
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (content: string, type: 'bot' | 'user', isOption = false): Message => {
    const message: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      isOption
    };
    setMessages(prev => [...prev, message]);
    return message;
  };

  const addBotMessage = (content: string, includeOptions = false) => {
    addMessage(content, 'bot');
    
    if (includeOptions && !isCollectingRequirements) {
      setTimeout(() => {
        addMessage("Choose an option:", 'bot', true);
      }, 500);
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, 'user');
    
    if (isCollectingRequirements) {
      handleRequirementResponse(inputValue);
    } else {
      handleGeneralQuery(inputValue);
    }
    
    setInputValue('');
  };

  const handleRequirementResponse = (response: string) => {
    const currentQuestion = requirementQuestions[requirementStep];
    const updatedData = { ...requirementData, [currentQuestion.field]: response };
    setRequirementData(updatedData);

    if (requirementStep < requirementQuestions.length - 1) {
      setRequirementStep(requirementStep + 1);
      setTimeout(() => {
        const nextQuestion = requirementQuestions[requirementStep + 1];
        addBotMessage(nextQuestion.question);
      }, 500);
    } else {
      // Requirements collection complete
      const finalData: RequirementData = {
        ...updatedData,
        timestamp: new Date()
      } as RequirementData;
      
      setAllRequirements(prev => [...prev, finalData]);
      setIsCollectingRequirements(false);
      setRequirementStep(0);
      setRequirementData({});
      
      setTimeout(() => {
        addBotMessage(`✅ Thank you ${finalData.name}! I've collected all your requirements:\n\n📧 Email: ${finalData.email}\n📞 Phone: ${finalData.phone}\n🏢 Service: ${finalData.serviceType}\n📏 Size: ${finalData.propertySize}\n⏰ Frequency: ${finalData.frequency}\n\nOur team will contact you within 24 hours with a customized quote. For immediate assistance, call 92094 47145!`, true);
      }, 1000);
    }
  };

  const handleGeneralQuery = (query: string) => {
    const lowerQuery = query.toLowerCase();
    let response = "I understand you're asking about our cleaning services. Let me help you with that!";

    // Simple keyword matching for predefined Q&As
    if (lowerQuery.includes('service') || lowerQuery.includes('offer')) {
      response = predefinedQAs[0].answer;
    } else if (lowerQuery.includes('area') || lowerQuery.includes('location') || lowerQuery.includes('pune')) {
      response = predefinedQAs[1].answer;
    } else if (lowerQuery.includes('cost') || lowerQuery.includes('price') || lowerQuery.includes('rate')) {
      response = predefinedQAs[2].answer;
    } else if (lowerQuery.includes('24/7') || lowerQuery.includes('available') || lowerQuery.includes('time')) {
      response = predefinedQAs[3].answer;
    } else if (lowerQuery.includes('eco') || lowerQuery.includes('safe') || lowerQuery.includes('product')) {
      response = predefinedQAs[4].answer;
    } else if (lowerQuery.includes('quote') || lowerQuery.includes('contact')) {
      response = predefinedQAs[5].answer;
    } else {
      response = "I'd be happy to help! For specific questions about our cleaning services, you can:\n\n📞 Call us: 92094 47145\n💬 WhatsApp us\n📧 Fill out the requirement form\n\nOr ask me about our services, pricing, areas we serve, or availability!";
    }

    setTimeout(() => {
      addBotMessage(response, true);
    }, 800);
  };

  const handleOptionClick = (option: string) => {
    addMessage(option, 'user');

    switch (option) {
      case 'View Services & Pricing':
        setTimeout(() => {
          addBotMessage(predefinedQAs[0].answer + "\n\n" + predefinedQAs[2].answer, true);
        }, 500);
        break;
      
      case 'Get a Quote':
        setIsCollectingRequirements(true);
        setRequirementStep(0);
        setTimeout(() => {
          addBotMessage("Great! I'll help you get a personalized quote. Let me collect some details from you.", false);
          setTimeout(() => {
            addBotMessage(requirementQuestions[0].question);
          }, 1000);
        }, 500);
        break;
      
      case 'Contact Information':
        setTimeout(() => {
          addBotMessage("📞 Phone: 92094 47145\n📧 Email: Available on our Contact page\n📍 Service Areas: Pune, PCMC & IT Hubs\n⏰ Available: 24/7\n\n💬 You can also WhatsApp us for instant responses!", true);
        }, 500);
        break;
      
      case 'FAQ':
        setTimeout(() => {
          const faqList = predefinedQAs.map((qa, index) => `${index + 1}. ${qa.question}`).join('\n');
          addBotMessage(`Here are our most frequently asked questions:\n\n${faqList}\n\nClick on any question above or type your question!`, false);
        }, 500);
        break;

      default:
        // Handle FAQ questions
        const faq = predefinedQAs.find(qa => qa.question === option);
        if (faq) {
          setTimeout(() => {
            addBotMessage(faq.answer, true);
          }, 500);
        }
        break;
    }
  };

  const exportToExcel = () => {
    if (allRequirements.length === 0) {
      addBotMessage("No requirement data to export yet. Collect some requirements first!");
      return;
    }

    const worksheetData = allRequirements.map(req => ({
      'Date': req.timestamp.toLocaleDateString(),
      'Time': req.timestamp.toLocaleTimeString(),
      'Name': req.name,
      'Email': req.email,
      'Phone': req.phone,
      'Service Type': req.serviceType,
      'Property Size': req.propertySize,
      'Frequency': req.frequency,
      'Additional Details': req.additionalDetails
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Cleaning Requirements');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    saveAs(data, `SK_Cleaning_Requirements_${new Date().toISOString().split('T')[0]}.xlsx`);
    
    addBotMessage("📊 Excel file has been downloaded with all collected requirements!");
  };

  const renderMessageContent = (message: Message) => {
    if (message.isOption) {
      return (
        <div className="space-y-2 mt-2">
          <div className="grid grid-cols-1 gap-2">
            {!isCollectingRequirements && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleOptionClick('View Services & Pricing')}
                  className="justify-start text-left hover:bg-blue-50 text-xs sm:text-sm p-2 sm:p-3 h-auto min-h-[36px]"
                >
                  🏢 View Services & Pricing
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleOptionClick('Get a Quote')}
                  className="justify-start text-left hover:bg-green-50 text-xs sm:text-sm p-2 sm:p-3 h-auto min-h-[36px]"
                >
                  📋 Get a Quote
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleOptionClick('Contact Information')}
                  className="justify-start text-left hover:bg-purple-50 text-xs sm:text-sm p-2 sm:p-3 h-auto min-h-[36px]"
                >
                  📞 Contact Information
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleOptionClick('FAQ')}
                  className="justify-start text-left hover:bg-orange-50 text-xs sm:text-sm p-2 sm:p-3 h-auto min-h-[36px]"
                >
                  ❓ Frequently Asked Questions
                </Button>
              </>
            )}
          </div>

          {/* FAQ Questions as clickable options */}
          {message.content.includes('frequently asked questions') && (
            <div className="mt-3 space-y-1">
              {predefinedQAs.map((qa, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleOptionClick(qa.question)}
                  className="justify-start text-left hover:bg-blue-50 text-xs p-2 h-auto min-h-[32px] w-full"
                >
                  {qa.question}
                </Button>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="whitespace-pre-line text-sm sm:text-base leading-relaxed">
        {message.content}
      </div>
    );
  };

  const renderRequirementInput = () => {
    if (!isCollectingRequirements) return null;

    const currentQuestion = requirementQuestions[requirementStep];

    if (currentQuestion.options) {
      return (
        <div className="p-3 sm:p-4 border-t bg-gray-50">
          <div className="text-sm text-gray-600 mb-3">Select an option:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {currentQuestion.options.map(option => (
              <Button
                key={option}
                variant="outline"
                size="sm"
                onClick={() => {
                  handleRequirementResponse(option);
                }}
                className="text-xs sm:text-sm p-2 sm:p-3 h-auto min-h-[36px] justify-start"
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-[25%] sm:bottom-6 sm:right-6 sm:left-auto sm:top-auto z-50 sm:w-96 sm:h-[600px] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden sm:max-h-[80vh]">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 sm:p-4 flex items-center justify-between relative">
            {/* Mobile drag handle */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full sm:hidden"></div>

            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1 mt-2 sm:mt-0">
              <div className="bg-white/20 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-sm sm:text-base truncate">SK Cleaning Assistant</h3>
                <p className="text-xs opacity-90">Online • Ready to help</p>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0 mt-2 sm:mt-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={exportToExcel}
                className="text-white hover:bg-white/20 p-2 hidden sm:flex"
                title="Export Requirements to Excel"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              {/* Mobile close button - more prominent */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 sm:p-2 w-8 h-8 sm:w-auto sm:h-auto rounded-full sm:rounded"
              >
                <X className="w-5 h-5 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50 touch-pan-y">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] sm:max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`px-3 py-2 sm:px-4 sm:py-2 rounded-2xl text-sm sm:text-base ${
                      message.type === 'user'
                        ? 'bg-blue-500 text-white rounded-br-md'
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md shadow-sm'
                    }`}
                  >
                    {renderMessageContent(message)}
                  </div>
                  <div className={`text-xs text-gray-500 mt-1 px-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.type === 'user' ? 'order-1 mr-1 sm:mr-2' : 'order-2 ml-1 sm:ml-2'}`}>
                  {message.type === 'user' ? (
                    <div className="bg-gray-300 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                      <User className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                      <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Requirement Input Options */}
          {renderRequirementInput()}

          {/* Input */}
          <div className="p-3 sm:p-4 border-t bg-white">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                  isCollectingRequirements
                    ? requirementQuestions[requirementStep]?.placeholder || "Type your response..."
                    : "Type your message..."
                }
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 border-gray-300 focus:border-blue-500 text-sm sm:text-base h-10 sm:h-10"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 min-w-[44px] h-10"
                disabled={!inputValue.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>

            {allRequirements.length > 0 && (
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-gray-500 leading-relaxed">
                  💾 {allRequirements.length} requirement(s) collected
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={exportToExcel}
                  className="sm:hidden text-gray-600 hover:bg-gray-100 p-1 h-auto"
                  title="Export to Excel"
                >
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
