import { useEffect, useState } from "react"

const Memos = ({state}) => {
  const [memos, setMemos] = useState([]);
  const {contract} = state;
  useEffect(() => {
    const memosMessage = async() => {
    const memos = await contract.getMemos();
    setMemos(memos);
    console.log(memos);
    }

    contract && memosMessage();
  }, [contract])
  return (
		<>
			<h1 className="'text-black text-4xl font-semibold text-center mt-20 mb-10 ">
				Previous Donors
			</h1>
			<div className='flex items-center justify-center'>
				<div className='w-[85%] grid grid-cols-4 text-center font-medium text-[22px] mb-1'>
					<p>Name</p>
					<p>Message</p>
					<p>Time</p>
					<p>Wallet Address</p>
				</div>
			</div>
			<div className='w-full px-5 flex flex-col justify-center items-center'>
				{memos.map((memo) => {
					return (
						<div className='w-[85%] grid grid-cols-4 gap-2 text-xl font-medium mb-6 text-white place-content-center '>
							<p className='px-5 py-2 rounded-xl bg-blue-500'>{memo.name}</p>
							<p className='px-5 py-2 rounded-xl bg-blue-500'>{memo.message}</p>
							<p className='px-5 py-2 rounded-xl bg-blue-500'>
								{new Date(memo.timestamp * 1000).toLocaleString()}
							</p>
							<p className='px-5 py-2 rounded-xl bg-blue-500'>
								{memo.from.slice(0, 20) + "..."}
							</p>
						</div>
					);
				})}
			</div>
		</>
	);
}
export default Memos