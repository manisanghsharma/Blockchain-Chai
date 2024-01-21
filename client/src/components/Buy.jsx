import { useState } from "react"
import { ethers } from "ethers";

const Buy = ({state}) => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("")
    const [val, setVal] = useState("")

    const buyChai = async(e) => {
        e.preventDefault();
        const {contract} = state;
        const amount = {value: ethers.utils.parseEther(val)};
        const transaction = await contract.buyChai(name,message, amount);
        await transaction.wait();
        alert("Transaction is successfull");
        window.location.reload();
    }

  return (
		<div className='w-[80%] mt-10 mx-auto'>
			<form
				action=''
				onSubmit={buyChai}
				className='py-6 bg-sky-300
                rounded-xl border-4 border-sky-800'
			>
				<h1 className="text-center text-3xl font-semibold mb-5">Donate Here 👇 </h1>
				<div className=' m-auto flex justify-center gap-8 items-center'>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='font-medium py-2 rounded-xl px-4 text-lg outline-none border-4 border-sky-700 bg-sky-100 placeholder:'
						placeholder='Name...'
						spellCheck='false'
					/>
					<input
						type='text'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className='font-medium py-2 rounded-xl px-4 w-[400px] text-lg outline-none border-4 border-sky-800 bg-sky-100 placeholder:'
						placeholder='Message...'
						spellCheck='false'
					/>
					<input
						type='number'
						value={val}
						onChange={(e) => setVal(e.target.value)}
						className='font-medium py-2 rounded-xl px-4 text-lg outline-none border-4 border-sky-800 bg-sky-100 placeholder:'
						placeholder='Amount in ETH...'
						spellCheck='false'
					/>
					<button
						className='px-8 py-2 bg-green-600 rounded-xl text-lg hover:bg-green-700 transition-all border-4
                    border-blue-800 text-green-100 font-semibold'
					>
						Pay
					</button>
				</div>
			</form>
		</div>
	);
}
export default Buy