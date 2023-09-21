import './App.css';
import Editor from '@monaco-editor/react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faPlay, faFlaskVial } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import DisassemblyView from './component/DisassemblyView';

function App() {
	const [code, setCode] = useState('let i = number(input(\"Enter a number \"));\n\nprint(i + 42);');
	const [disassemblyView, setDisassemblyView] = useState(false);

	function toggleDisassemblyView() {
		setDisassemblyView(!disassemblyView);
	}

	function onRunCode() {
		const xCallbackURL = "shortcuts://x-callback-url/run-shortcut?name=melon&input="

		window.location.href = xCallbackURL + encodeURIComponent(code);
	}

	function onEditorChange(value) {
		setCode(value);
	}

	return (
		<main className="w-full h-screen  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700">
			<div className='w-full h-screen bg-gray-900/30 text-white p-10'>
				<header>
					<div className='flex justify-between items-center'>
						<h1 className='text-3xl font-bold'>melon playground 🍉 </h1>
						<div>
							<button className='p-4 bg-black/50 rounded-xl hover:text-pink-500 mr-4' onClick={toggleDisassemblyView}>
								<FontAwesomeIcon icon={faFlaskVial} />
							</button>
							<button className='p-4 bg-black/50 rounded-xl hover:text-pink-500' onClick={onRunCode}>
								<FontAwesomeIcon icon={faPlay} size='xl' />
							</button>
						</div>
					</div>
				</header>

				<div className='rounded-xl bg-black/50 p-2 mt-4 flex '>
					<div className="opacity-1 w-3/5 grow">
						<Editor height="70vh" defaultLanguage="javascript" theme="vs-dark"
							onChange={onEditorChange}
							options={{
								fontSize: 16,
							}}
							value={code}
						/>
					</div>
					{	disassemblyView &&
						<DisassemblyView code={code} />
					}
				</div>

			</div>
		</main>
	);
}

export default App;
