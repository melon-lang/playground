import { compile } from 'melon-lang/dist/src/index';

function disassemble(program) {
    const text = program.text.map(ins => ins.type + "\t\t" + ((ins.value !== undefined) ? ins.value : ""));
    const data = program.data.map(ins => ins.type + "\t\t" + ins.value);

    return [text, data]
}



function DisassemblyView({ code }) {

    let error = false;
    let program;
    let errorMessage = "";
    try {
        program = compile(code || "");
    } catch (e) {
        program = { text: [], data: [] }
        error = true;
        errorMessage = e.message;
    }

    const [text, data] = disassemble(program);


    return <div className="flex-1 w-full font-mono p-4 break-keep ">
        <h2>Disassembly</h2>
        {
            error &&
            <p className='text-red-500'>{errorMessage}</p>
        }
        {!error &&
            <>
                <h3>.text</h3>
                {text.map((ins, i) => <p key={i} className='ml-6'>{"\t" + ins}</p>)}

                <h3>.data</h3>
                {data.map((ins, i) => <p key={i} className='ml-6'>{"\t" + ins}</p>)}
            </>
        }
    </div>
}

export default DisassemblyView;