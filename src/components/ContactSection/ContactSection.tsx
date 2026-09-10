import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, Linkedin, CheckCircle2 } from "lucide-react";
import { Input } from "../lightswind/input";
import { Textarea } from "../lightswind/textarea";
import { Button } from "../lightswind/button";

export const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-12 rounded-[3rem] border border-foreground/10 relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Contact Info */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Let's <span className="text-gradient-primary">Connect</span>
              </h2>
              <p className="text-muted-foreground">
                Currently open for software engineering opportunities, full-stack development, and technical collaborations. Feel free to reach out directly via email, phone, or LinkedIn!
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="mailto:bharathsparrow1938@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-transform">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Email</span>
                  <span className="font-semibold text-foreground text-sm md:text-base">bharathsparrow1938@gmail.com</span>
                </div>
              </a>

              <a
                href="tel:6369698738"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-transform">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Phone</span>
                  <span className="font-semibold text-foreground text-sm md:text-base">+91 6369698738</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/bharathwaj-10b668263"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-transform">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">LinkedIn</span>
                  <span className="font-semibold text-foreground text-sm md:text-base">linkedin.com/in/bharathwaj-10b668263</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground group">
                <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Location</span>
                  <span className="font-semibold text-foreground text-sm md:text-base">Tiruppur, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 glass-panel p-8 rounded-[2rem] border border-foreground/10 relative">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center h-full min-h-[320px] gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Thank you for reaching out, Bharathwaj will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Your Name</label>
                  <Input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                    placeholder="e.g. John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Your Email</label>
                  <Input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                    placeholder="e.g. john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Message</label>
                  <Textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary resize-none placeholder:text-muted-foreground/50 min-h-[120px]"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-xl bg-primary text-primary-foreground font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] mt-4 h-12 cursor-pointer">
                  Send Message <Send className="w-4 h-4 ml-1" />
                </Button>
              </form>
            )}
          </div>

        </div>
      </motion.div>
    </section>
  );
};
