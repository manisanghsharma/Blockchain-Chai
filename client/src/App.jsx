import { useEffect, useState } from "react";
import abi from "./contractJson/chai.json";
import {ethers} from "ethers";
import Memos from "./components/Memos";
import Buy from "./components/Buy";
import Navbar from "./components/Navbar";

function App() {
	const [state, setState] = useState({
		provider: null,
		signer: null,
		contract: null,
	});
	const [account, setAccount] = useState("No account connected");

	useEffect(() => {
		const template = async () => {
			const contractAddress = "0xC2Df27dD08dE65b50c44E7dD16C57B0d2aCA342a"; //making a template
			const contractABI = abi.abi;

			//connect to metamask -> goerli testnet -> using infura api (RPC link)

			try {
				const { ethereum } = window; //fetching window.ethereum -> added by metamask

				const account = await ethereum.request({
					method: "eth_requestAccounts",
				});

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        })

				const provider = new ethers.providers.Web3Provider(ethereum); //helpful in reading the bcn
				const signer = provider.getSigner(); //usefull in writing to bcn

				const contract = new ethers.Contract(
					contractAddress, //we need 3 things  to create instance of the smart contract-> address, abi for talking to smart contract -> signer for doing trnsactions on the contract
					contractABI,
					signer
				);

				setState({ provider, signer, contract });
        setAccount(account);

        console.log(contract);
			} catch (err) {
				console.log(err.message);
			}
		};

		template();
	}, []);

	return (
		<div>
			<Navbar account={account} />
			<h1 className='text-black text-4xl font-semibold text-center mt-7 '>
				Buy Me a Coffee ☕
			</h1>
			<p className='text-2xl p-5 mt-5'>
				<span className='font-bold'>🌟 About Me:</span> Hello, I'm Manisangh
				Sharma, a passionate frontend developer dedicated to creating meaningful
				and user-friendly online experiences. If you like my work, you can
				donate to me using ethereum.
			</p>
			<p className='text-2xl p-5'>
				<span className='font-bold'>💡 Why Ethereum?</span> We've chosen
				Ethereum for its secure and decentralized nature. Your contributions
				will directly go towards empowering me to push the boundaries of
				frontend development and pushing out better content for everyone for no
				cost.
			</p>
			<Buy state={state} />
			{state.contract && <Memos state={state}/>}
		</div>
	);
}

export default App;
