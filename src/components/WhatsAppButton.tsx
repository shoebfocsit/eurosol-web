import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210";
  const message = encodeURIComponent(
    "Hi Eurosol Prime! I'm interested in solar panel installation. Can you help me with a free consultation?"
  );
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-[hsl(142_70%_45%)] animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[hsl(142_70%_45%)] flex items-center justify-center shadow-lg shadow-[hsl(142_70%_45%/0.4)] group-hover:scale-110 transition-transform duration-300">
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white" />
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 glass rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <span className="text-xs font-medium text-foreground">Chat with us on WhatsApp</span>
        <div className="absolute top-full right-6 w-2 h-2 glass rotate-45 -mt-1" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
