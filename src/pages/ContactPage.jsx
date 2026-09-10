import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ArrowLeft, MessageSquare, Clock, Globe } from "@/components/Icons";
import { Button } from "@/components/Button";
import { TiltCard } from "@/components/TiltCard";
import { useNavigation } from "@/context/NavigationContext";
import emailjs from "@emailjs/browser";
import { SEO } from "@/components/SEO";

const contactChannels = [
  {
    icon: Mail,
    label: "Email Directly",
    value: "maruharish471@gmail.com",
    href: "mailto:maruharish471@gmail.com",
    description: "Best for project inquiries & proposals",
  },
  {
    icon: Phone,
    label: "Phone & WhatsApp",
    value: "+91 6266157794",
    href: "tel:+916266157794",
    description: "Available Mon-Sat, 10am - 8pm IST",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indore, Madhya Pradesh, India",
    href: "#",
    description: "Open to remote work worldwide",
  },
];

export const ContactPage = () => {
  const { navigate } = useNavigation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: `${formData.subject ? `[Subject: ${formData.subject}]\n` : ""}${formData.message}`,
          time: new Date().toLocaleString(),
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message: err.text || "Failed to send message. Please try again or email directly at maruharish471@gmail.com",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden">
      <SEO
        title="Contact Harish Maru | Hire Full Stack Developer in Indore"
        description="Contact Harish Maru, Full Stack Developer and Software Engineer in Indore, Madhya Pradesh. Available for freelance web development and full-time software engineering roles."
        canonical="https://harish-maru.netlify.app/contact"
      />
      {/* Background Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <div className="mb-8">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            aria-label="Back to Harish Maru Portfolio Home"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </a>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Let's Talk
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mt-3 mb-4">
            Get In Touch &amp; Connect
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Have a project, idea, or freelance opportunity? Contact Harish Maru, Full Stack Developer &amp; Software Engineer based in Indore, Madhya Pradesh.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            <TiltCard
              maxTilt={6}
              scale={1.01}
              className="glass p-6 sm:p-10 rounded-3xl border border-primary/30"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="c-name" className="block text-xs sm:text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:outline-none text-xs sm:text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="c-email" className="block text-xs sm:text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:outline-none text-xs sm:text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="c-subject" className="block text-xs sm:text-sm font-medium mb-2">
                    Subject (Optional)
                  </label>
                  <input
                    id="c-subject"
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:outline-none text-xs sm:text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="c-msg" className="block text-xs sm:text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="c-msg"
                    rows={5}
                    required
                    placeholder="Tell me about your project, timeline, or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:outline-none text-xs sm:text-sm transition-all resize-none"
                  />
                </div>

                <Button
                  className="w-full py-3"
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>

                {submitStatus.type && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-xl text-xs sm:text-sm ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p>{submitStatus.message}</p>
                  </div>
                )}
              </form>
            </TiltCard>
          </div>

          {/* Right: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard
              maxTilt={8}
              className="glass p-6 sm:p-8 rounded-3xl border border-border/50 space-y-6"
            >
              <h3 className="text-xl font-bold">Contact Channels</h3>
              <div className="space-y-4">
                {contactChannels.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-start gap-4 p-3 rounded-2xl hover:bg-surface transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-105 transition-all flex-shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </div>
                      <div className="text-[11px] text-muted-foreground/80 mt-0.5">
                        {item.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </TiltCard>

            {/* Availability Status */}
            <TiltCard
              maxTilt={10}
              className="glass p-6 sm:p-8 rounded-3xl border border-primary/30 space-y-3"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-foreground">Available for Work</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Currently open for freelance projects, technical consulting, and full-time software engineering roles.
              </p>
            </TiltCard>
          </div>
        </div>
      </div>
    </div>
  );
};
