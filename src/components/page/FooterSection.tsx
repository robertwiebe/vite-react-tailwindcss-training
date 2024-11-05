interface FooterSectionProps {
  title: string;
  links: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div className='w-1/5 flex flex-col gap-2'>
      <span className='font-bold'>{title}</span>
      {links.map((link, index) => <span key={index} className="cursor-pointer hover:text-karcis-lightgray">{link}</span>)}
    </div>
  )
}

export default FooterSection
