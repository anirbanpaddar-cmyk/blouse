import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('Namaste Sindaram Blouse! I would like to enquire about blouse custom sizing & designs.');

  const handleSendMessage = (textToSend?: string) => {
    const query = encodeURIComponent(textToSend || message);
    window.open(`https://wa.me/917278138132?text=${query}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Interactive Chat Popup Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#FDFBF7] rounded-2xl shadow-2xl border border-[#CF9E38]/40 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-[#420A17] p-4 text-[#FDFBF7] flex items-center justify-between border-b border-[#CF9E38]/30">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold tracking-wide">Sindaram Boutique Stylist</div>
                <div className="text-[11px] text-[#E2B657] font-bengali">সিন্দারাম লাইভ সহায়তা (অনলাইন)</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#EFE7D8] hover:text-white p-1 rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#F8F3EA]/60 text-xs space-y-3">
            <div className="p-3 bg-[#FDFBF7] rounded-xl border border-[#EFE7D8] text-[#420A17] shadow-xs">
              <div className="font-bold text-[#8C1935] flex items-center gap-1 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#CF9E38]" />
                <span>Boutique Fitting Assistant</span>
              </div>
              <p className="leading-relaxed">
                Namaste! Need assistance with your bust size measurement, saree matching, or delivery status? Click any quick question below or send us a message:
              </p>
            </div>

            {/* Quick Prompt Chips */}
            <div className="space-y-1.5 pt-1">
              <button
                onClick={() => handleSendMessage('Hi! Can you help me pick the right blouse size for bust 36?')}
                className="w-full text-left p-2 rounded-lg bg-[#FDFBF7] hover:bg-[#CF9E38]/15 text-[#420A17] border border-[#EFE7D8] transition-colors"
              >
                📏 Help me choose my exact blouse size
              </button>
              <button
                onClick={() => handleSendMessage('Hello! Can I request custom padding or extra inside margins?')}
                className="w-full text-left p-2 rounded-lg bg-[#FDFBF7] hover:bg-[#CF9E38]/15 text-[#420A17] border border-[#EFE7D8] transition-colors"
              >
                ✂️ Enquiry about custom padding / alterations
              </button>
              <button
                onClick={() => handleSendMessage('Namaste, how fast can you deliver to my pincode?')}
                className="w-full text-left p-2 rounded-lg bg-[#FDFBF7] hover:bg-[#CF9E38]/15 text-[#420A17] border border-[#EFE7D8] transition-colors"
              >
                🚚 Check delivery timeline for my pincode
              </button>
            </div>
          </div>

          {/* Input & Send Button */}
          <div className="p-3 bg-[#FDFBF7] border-t border-[#EFE7D8] flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 text-xs bg-[#F8F3EA] border border-[#EFE7D8] rounded-xl px-3 py-2 text-[#420A17] focus:outline-hidden focus:border-[#8C1935]"
            />
            <button
              onClick={() => handleSendMessage()}
              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-white/60"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          WhatsApp Styling Support
        </span>
      </button>

    </div>
  );
};
