
import { BiMailSend, BiPhone } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { Container } from "@/components";

const Footer = () => {

    const Row1 = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Certifications",
            link: "/certifications"
        },
        {
            title: "Reach Us",
            link: "/reach-us",
        },
        {
            title: "Be Our Channel Partner",
            link: "/be-our-channel-partner",
        },
        {
            title: "Customer Feedback",
            link: "/customer-Feedback"
        }
    ]

    const row2 = [
        {
            title: "Corporate Catelog",
            link: "/corporate-catalog"
        },
        {
            title: "Terms & Conditions",
            link: "/terms-and-conditions"
        },
        {
            title: "Disclaimer",
            link: "/disclaimer"
        }
    ]
    return (
        <footer className="bg-teal-600 text-white text-sm">
            <Container>
                <div className="flex flex-col md:flex-row md:grid md:grid-cols-2 gap-4 md:gap-12 pt-16 pb-8">
                    <div className="flex flex-col gap-2 md:gap-4">
                        © 2024 - Rotex Automation. All Rights Reserved. Rotex Automations website
                        uses cookies to provide you with the best experience while using our site. By
                        continuing, you agree to use of cookies and to our website terms (including our privacy policy). Click here to view our privacy policy.
                        <span>Employee Portal | Partners Login | Supplier Login</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:grid md:grid-cols-4">
                        <div className="flex flex-col gap-2">
                            <ul className="flex flex-col gap-2">
                                {Row1.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item.link}>{item.title}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <ul className="flex flex-col gap-2">
                                {row2.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item.link}>{item.title}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className=" col-span-2 flex flex-col gap-2">
                            <div className="font-semibold">Rotex Automation Limited</div>
                            <div>987/11, GIDC Makarpura,Vadodara-390010, Gujarat, India.</div>
                            <div className="flex items-center gap-1">
                                <BiPhone size={24} />
                                +91 87-9273-9273
                            </div>
                            <div className="flex items-center gap-1">
                                <BiMailSend size={24} />
                                enq@rotexautomation.com
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;