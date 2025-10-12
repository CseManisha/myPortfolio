import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from "lucide-react"
import { cn } from '../lib/utils'
import toast,{Toaster} from 'react-hot-toast';


export const ContactSection = () => {


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };


        const res = await fetch("http://localhost:3000/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.success) {
            toast.success("Message Sent!");
            e.target.reset();
        } else {
            toast.error("Failed to send message.");
        }


    };




    return (
        <section
            id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate ? Feel free to reach out.
                    I'am always open to discussing new opportunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                        <div className="space-y6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>

                                <div >
                                    <h4 className="font-medium"> Email</h4>
                                    <a
                                        href="mailto:manishamani1176@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        manishamani1176@gmail.com

                                    </a>
                                </div>

                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div >
                                    <h4 className="font-medium"> Phone</h4>
                                    <a
                                        href="tel:+91844871033"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +91844871033

                                    </a>
                                </div>

                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div >
                                    <h4 className="font-medium"> Location</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        India , New Delhi

                                    </a>
                                </div>

                            </div>

                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank" >
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank" >
                                    <Instagram />
                                </a>
                                <a href="#" target="_blank" >
                                    <Twitter />

                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-x5"
                    >
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"
                                >
                                    {'  '}
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Manisha thapa"
                                />

                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"
                                >
                                    {'  '}
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="somethingxxx@gmai.com"
                                />

                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"
                                >
                                    {'  '}
                                    Your Message
                                </label>
                                <textarea
                                    type="message"
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Hello , I'd like to talk about"
                                />
                                <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2 mt-5"

                                )}
                                >
                                    send Message
                                    <Send size={16} />
                                </button>

                            </div>



                        </form>
                        <Toaster />

                    </div>
                </div>
            </div>

        </section>
    )
}