import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919834460139";
  const message = encodeURIComponent(
    "Hello Eurosol Prime! 👋\n\nI'm interested in switching to solar energy. I'd like to know more about:\n\n🔆 Solar panel installation for my home/business\n💰 Government subsidies & savings estimate\n📋 Free site survey & consultation\n\nPlease help me with a customized solar solution. Looking forward to hearing from you!"
  );
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[hsl(142_70%_45%)] animate-ping opacity-30" />
        <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[hsl(142_70%_45%)] flex items-center justify-center shadow-lg shadow-[hsl(142_70%_45%/0.4)] group-hover:scale-110 transition-transform duration-300">
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
