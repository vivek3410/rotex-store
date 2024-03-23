

interface FloatingInputProps {
    label: string;
}
export const FloatingInput = ({ label }: FloatingInputProps) => {
    return (
        <div className='flex justify-center items-center relative'>
            <input type="text" className=' px-2 md:px-4 h-12 bg-white w-full text-sm md:text-xl border-2 rounded-full border-black outline-none focus:border-teal-600 focus:text-black border-opacity-50 transition duration-200' />
            <span className='text-md absolute left-0 top-3 mx-4 px-2 transition duration-200 input-text'>{label}</span>
        </div>
    )
}