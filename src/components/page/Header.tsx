import Button from "../generic/Button"
import Input from "../generic/Input"

const Header: React.FC = () => {
    return (
        <div className='w-full h-16 px-16 py-1 sticky top-0 flex flex-row items-center bg-white border-b border-karcis-lightgray justify-between z-10'>
            <h1 className='text-karcis-blue cursor-pointer'>Karcis.com</h1>
            <Input />
            <div className='flex flex-row gap-8'>
                <Button type='secondary' text='Log in' />
                <Button type='primary' text='Sign up' />
            </div>
        </div>
    )
}

export default Header
