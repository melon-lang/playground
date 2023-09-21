import './App.css';
import Editor from '@monaco-editor/react';
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';



function App() {
	const editor = useRef();

	function onRunCode() {
		const code = editor.current.getValue();
		const xCallbackURL = "shortcuts://x-callback-url/run-shortcut?name=melon&input="

		window.location.href =  xCallbackURL + encodeURIComponent(code);
	}

	function onEditorMount(editor_, monaco) {
		editor.current = editor_;
	  }

  return (
    <main className="w-full h-screen  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700">
		<div className='w-full h-screen bg-gray-900/30 text-white p-10'>
			<header>
				<div className='flex justify-between items-center'>
				<h1 className='text-3xl font-bold'>melon playground 🍉 </h1>
				<button className='p-4 bg-black/50 rounded-xl hover:text-pink-500' onClick={onRunCode}>
					<FontAwesomeIcon icon={faPlay} size='xl' />
				</button>
				</div>
			</header>
			
			<div className='rounded-xl bg-black/50 p-2 mt-4'>
			<Editor className="opacity-1 " height="70vh" defaultLanguage="javascript" defaultValue={'let i = number(input(\"Enter a number \"));\n\nprint(i + 42);'} theme="vs-dark"
				options={{
					fontSize: 16,
				}}
				onMount={onEditorMount}
			/>
			</div>

		</div>
	</main>
  );
}

export default App;
