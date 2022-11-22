import { forwardRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Searchbar = forwardRef((props: any, ref: any) => {
  return (
    <div className="flex gap-2 items-center bg-[#8B8E8E] px-5 py-4 rounded-3xl shadow-lg shadow-white/20">
      <AiOutlineSearch color="4E4E55" size={25} />
      <input
        {...props}
        ref={ref}
        className="text-base bg-[#8B8E8E] placeholder:text-[#4e4e55] outline-none text-[#4E4E55] w-full"
      />
    </div>
  )
})

export default Searchbar
