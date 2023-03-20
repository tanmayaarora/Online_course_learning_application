const PythonQuickStart = () => {
    return (
        <>
            <div>
                Python is an interpreted programming language, this means that as a developer you write Python (.py) files in a text editor and then put those files into the python interpreter to be executed.
            </div>
            <div className="m-bottom-30">Let's write our first Python file, called helloworld.py, which can be done in any text editor.</div>
            <div className="bg-grey m-bottom-30 p-block-5">
                <h6>helloworld.py</h6>
                <code className="bg-white p-inline-25rem">print("Hello world!")</code>
            </div>
            <div className="m-bottom-30">Simple as that. Save your file. Open your command line, navigate to the directory where you saved your file, and run</div>
            <div className="m-bottom-30">The output should read:</div>
            <div className="bg-grey m-bottom-30 p-block-30">
                <div className="bg-black p-block-5 text-white medium-text-size">
                    Hello world!
                </div>
            </div>
            <div className="m-bottom-30">Congratulations, you have written and executed your first Python program.</div>
        </>
    );
}

export default PythonQuickStart;