import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

function CategorySearch() {
    return (
        <div className='mb-10 flex-col items-center flex gap-2'>
            <Image src="/logo.svg" width={180} height={80} alt='logo' />
            <h2 className='font-bold text-4xl tracking-wide'>
                Search <span className='text-primary'>Doctors</span>
            </h2>
            <h2 className='text-gray-500 text-xl'>Search your Doctor & Book Appointment in one click</h2>
            <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Search..." />
                <Button  type="submit"> <Search className='h-4 w-4 mr-2' />Search</Button >
            </div>
        </div>
    )
}

export default CategorySearch