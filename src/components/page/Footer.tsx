import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FooterSection from "./FooterSection"

const Footer: React.FC = () => {
    return (
        <div className='w-full bg-karcis-blue text-white flex flex-col gap-4'>
            <div className='w-full flex flex-row p-16'>
                <div className='w-1/5 flex flex-col gap-2'>
                    <h1>Karcis.com</h1>
                </div>
                <FooterSection
                    title="About"
                    links={[
                        'About Karcis.com',
                        'How it works',
                        'Careers',
                        'Press',
                        'Blog',
                        'Forum',
                    ]}
                />
                <FooterSection
                    title="Partner with us"
                    links={[
                        'Partnership programs',
                        'Affiliate program',
                        'Connectivity partners',
                        'Promotions and events',
                        'Integrations',
                        'Community',
                        'Loyalty program',
                    ]}
                />
                <FooterSection
                    title="Support"
                    links={[
                        'Help Center',
                        'Contact us',
                        'Privacy policy',
                        'Terms of service',
                        'Trust and safety',
                        'Accessibility',
                    ]}
                />
                <FooterSection
                    title="Get the app"
                    links={[
                        'Karcis.com for Android',
                        'Karcis.com for iOS',
                        'Mobile site',
                    ]}
                />
            </div>
            <div className="border-t border-karcis-lightgray h-16 px-16 flex flex-row justify-between items-center">
                <div className='flex flex-row gap-2'>
                    <FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:text-karcis-lightgray" />
                    <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-karcis-lightgray" />
                    <FontAwesomeIcon icon={faFacebook} className="cursor-pointer hover:text-karcis-lightgray" />
                </div>
                <span>© 2020 Karcis Incorporated</span>
            </div>
        </div>
    )
}

export default Footer
