const Input = ({place, value, onChange}) => {
  return (
    
    <div>
        <input type="text" placeholder={place}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
  )
}

export default Input