import React from 'react'
import { Button } from './ui/button'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { LuChevronsRight } from 'react-icons/lu'

const TransactionPagination = () => {
  return (
    <div className="px-5 hidden md:flex justify-between gap-2">
        <div className="text-[#696D8C]">Showing 6 of 20 results</div>
        <div className="text-[#535379] flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="rounded-md w-8 h-8 p-0"
          >
            <IoChevronBack/>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-md w-8 h-8 p-0"
            >
            1
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-md w-8 h-8 p-0"
            >
            2
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-md w-8 h-8 p-0"
            >
            <LuChevronsRight/>
    
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-md w-8 h-8 p-0"
            >
            9
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-md w-8 h-8 p-0"
            >
            <IoChevronForward/>
    
          </Button>
        </div>
      </div>
  )
}

export default TransactionPagination