import { useState } from "react";
import { Linkedin, Twitter, X } from "lucide-react";
import ScrollAnimator from "./ScrollAnimator";
import headOfBusinessImg from "@/assets/team/Head of Business.jpeg";
import prernaHeadHRImg from "@/assets/team/Prerna Head HR.png";
import headOfOperationImg from "@/assets/team/Head of Operation.jpg";
import pintuHeadOfInstallationIndoreImg from "@/assets/team/Pintu Head of installation Indore.jpeg";
import headOfInstallationNagpurImg from "@/assets/team/Head of Installation Nagpur.jpeg";
import shoebRajITHeadImg from "@/assets/team/shoeb raj IT Head.jpeg";

const team = [
  {
    name: "Lavish Sharma",
    role: "Head of Business",
    image: headOfBusinessImg,
    desc: "Leading business strategy, corporate growth, and client relations at Eurosol Prime.",
  },
  {
    name: "Amar Kapse",
    role: "Head of Operation",
    image: headOfOperationImg,
    desc: "Overseeing daily operational workflows, system deployments, and project delivery.",
  },
  {
    name: "Anil Nargiz",
    role: "Head of Installation Nagpur",
    image: headOfInstallationNagpurImg,
    desc: "Spearheading engineering standards and solar plant installations in the Nagpur region.",
  },
  {
    name: "Pintu dawar",
    role: "Head of Installation Indore",
    image: pintuHeadOfInstallationIndoreImg,
    desc: "Managing on-site operations, panel mounting, and solar grid setup in Indore.",
  },
  {
    name: "Prerna Amar Kapse",
    role: "Head of Procurement & HR",
    image: prernaHeadHRImg,
    desc: "Directing human resource initiatives, recruitment, and organizational culture.",
  },
  {
    name: "Shoeb Raj",
    role: "IT Head",
    image: shoebRajITHeadImg,
    desc: "Leading software infrastructure, smart solar monitoring systems, and technical operations.",
  },
];

const TeamSection = () => {
  const [activeMember, setActiveMember] = useState<typeof team[0] | null>(null);

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
            Our passionate team of solar professionals is committed to delivering excellence in every project. Click on any card to view more details.
          </p>
        </ScrollAnimator>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
          {team.map((member, i) => (
            <ScrollAnimator key={member.name} delay={i * 100}>
              <div
                onClick={() => setActiveMember(member)}
                className="glass rounded-2xl p-4 sm:p-5 text-center group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 animate-pulse" />
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-full h-full object-cover object-top rounded-full relative z-10 border-2 border-primary/20 group-hover:border-primary/50 transition-all"
                  />
                </div>

                <h3 className="font-bold text-foreground text-sm sm:text-base">{member.name}</h3>
                <p className="text-primary text-[10px] sm:text-xs font-semibold mt-0.5">{member.role}</p>
                <p className="text-muted-foreground text-[10px] sm:text-xs mt-2 leading-relaxed line-clamp-3">{member.desc}</p>

                <div className="flex items-center justify-center gap-2 mt-3" onClick={(e) => e.stopPropagation()}>
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

      {/* Modal / Dialog for Full View */}
      {activeMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
          {/* Backdrop click to close */}
          <div
            className="absolute inset-0 bg-transparent"
            onClick={() => setActiveMember(null)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-lg overflow-hidden glass rounded-3xl shadow-2xl border border-primary/20 bg-background/95 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200 z-10">
            {/* Close Button */}
            <button
              onClick={() => setActiveMember(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close details"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-6 sm:p-8 overflow-y-auto">
              <div className="flex flex-col items-center text-center">
                {/* Full Profile Image */}
                <div className="relative w-full max-h-[350px] mb-6 rounded-2xl overflow-hidden bg-muted/40 border border-primary/10 flex items-center justify-center shrink-0 shadow-lg">
                  <img
                    src={activeMember.image}
                    alt={activeMember.name}
                    className="max-h-[350px] w-full object-contain relative z-10"
                  />
                </div>

                {/* Name & Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                  {activeMember.name}
                </h3>
                <span className="inline-block mt-2 px-3 py-1 text-xs sm:text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full">
                  {activeMember.role}
                </span>

                {/* Divider */}
                <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-primary/10 rounded-full my-5" />

                {/* Description */}
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
                  {activeMember.desc}
                </p>

                {/* More Details (Dynamic details card) */}
                <div className="mt-6 w-full bg-primary/[0.02] border border-primary/5 rounded-2xl p-4 text-left">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Key Expertise & Role</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Responsible for driving energy efficiency and solar installations across Indore and Nagpur. Delivering top-tier project management, safety compliance, and direct support to achieve a 100% savings rate for Eurosol Prime's clients.
                  </p>
                </div>

                {/* Social Connect */}
                <div className="flex items-center justify-center gap-3 mt-6" onClick={(e) => e.stopPropagation()}>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
