const Navbar = ({account}) => {

  return (
		<>

			<div className='w-full h-20 bg-gray-900'>
				<div className='p-5 w-full h-20 flex justify-between items-center'>
					<img
						src='https://avatars.githubusercontent.com/u/78167300?v=4'
						alt=''
						className='w-14 rounded-full border-[3px] border-white'

					/>
					

					{/* <button className="px-8 py-2 bg-green-600 rounded-xl text-lg hover:bg-green-700 transition-all border-[3px]
                    border-green-900 font-medium text-green-100"

                    >
                        Connect
                    </button> */}
					<p className="text-white">Connect Account: {account}</p>
				</div>
			</div>
		</>
	);
}
export default Navbar