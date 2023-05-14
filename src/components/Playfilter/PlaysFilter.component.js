import { Disclosure } from '@headlessui/react';
import {BiChevronDown,BiChevronUp} from "react-icons/bi"
function PlaysFilter (props) {
  return (

<div className='bg-gray-100 my-2 rounded pl-4 pb-2'>
    <Disclosure>
    {({ open }) => (
    <>
      <Disclosure.Button className="py-2 flex items-center gap-5">
        {open ? <BiChevronUp/> : <BiChevronDown/>}
        <span className ={open ? "text-red-600" : "text-gray-500"}>
            {props.title}
        </span>
        
        
      </Disclosure.Button>
      
      <Disclosure.Panel className="text-gray-500">

        <div className="flex item-center gap-3 flex-wrap" > 

            {props.tags.map((tag) =>(
                <>
                <div className='border text-sm border-gray-400 p-1 rounded'>
                    <span className='text-red-600'>{tag}</span>
                </div>
                
                </>
            ))}

            
        </div>
      </Disclosure.Panel>
    </>
    )}
    </Disclosure>
    </div>
  )
}

export default PlaysFilter;