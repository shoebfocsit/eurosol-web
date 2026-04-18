import { Linkedin, Twitter } from "lucide-react";
import ScrollAnimator from "./ScrollAnimator";
import founderImg from "@/assets/team-founder.png";
import prernaImg from "@/assets/team-prerna.png";
import bhushanImg from "@/assets/team-bhushan.png";
import shoebImg from "@/assets/team-shoeb.png";
import prajwalImg from "@/assets/team-prajwal.png";

const team = [
  {
    name: "Amar Kapse",
    role: "Director of Business Operations",
    image: founderImg,
    desc: "Leading business operations at Eurosol Prime Pvt. Ltd., driving India's solar revolution from Indore.",
  },
  {
    name: "Prerna Amar Kapse",
    role: "Founder",
    image: prernaImg,
    desc: "Visionary founder championing clean energy adoption across Madhya Pradesh & Maharashtra.",
  },
  {
    name: "Bhushan",
    role: "Zone Manager — Indore",
    image: bhushanImg,
    desc: "Heading Indore zone operations with seamless project delivery and customer satisfaction.",
  },
  {
    name: "Shoeb Raj",
    role: "IT Head",
    image: shoebImg,
    desc: "5+ years experience leading tech, smart solar monitoring, and IoT integration solutions.",
  },
  {
    name: "Prajwal Shambharkar",
    role: "Sales Executive",
    image: prajwalImg,
    desc: "Building lasting customer relationships with transparent solar solutions across Nagpur region.",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollAnimator className="text-center mb-12">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Team</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 leading-tight">
            Meet The <span className="gradient-text">Experts</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Our passionate team of solar professionals is committed to delivering excellence in every project.
          </p>
        </ScrollAnimator>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {team.map((member, i) => (
            <ScrollAnimator key={member.name} delay={i * 100}>
              <div className="glass rounded-2xl p-4 sm:p-5 text-center group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 animate-pulse" />
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-full h-full object-cover rounded-full relative z-10 border-2 border-primary/20 group-hover:border-primary/50 transition-all"
                  />
                </div>

                <h3 className="font-bold text-foreground text-sm sm:text-base">{member.name}</h3>
                <p className="text-primary text-[10px] sm:text-xs font-semibold mt-0.5">{member.role}</p>
                <p className="text-muted-foreground text-[10px] sm:text-xs mt-2 leading-relaxed line-clamp-3">{member.desc}</p>

                <div className="flex items-center justify-center gap-2 mt-3">
                  <a href="#" className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-3 h-3 text-primary" />
                  </a>
                  <a href="#" className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Twitter className="w-3 h-3 text-primary" />
                  </a>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
