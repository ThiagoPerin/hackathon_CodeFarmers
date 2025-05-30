import { CircleUser } from 'lucide-react';

export default function Navbar() {
    return (
        <div className="w-full h-[70px] px-4 flex items-center justify-between bg-green-mid">
            <h1 className="text-3xl text-white font-light">NomeApp</h1>

            <div className="bg-gray-400 w-[40px] h-[40px] rounded-full flex items-center justify-center">
                <CircleUser className='text-gray-300' />
            </div>
        </div>
    );
}