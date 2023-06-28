

export default function Input({label, type, placeholder}) {
  return(
    <div className="mt-4">
      <label className="block text-gray-700">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-black focus:bg-white focus:outline-none" 
        required 
      />
    </div>
  )
}