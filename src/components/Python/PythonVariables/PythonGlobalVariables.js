const PythonGlobalVariables = () => {
    return (
        <div>
            <h2>Python - Global Variables</h2>
            <h4>Global Variables</h4>
            <div className="m-bottom-30">
                Variables that are created outside of a function (as in all of the examples above) are known as global variables.
            </div>
            <div className="m-bottom-30">Global variables can be used by everyone, both inside of functions and outside.</div>
            <div>
                If you create a variable with the same name inside a function, this variable will be local, and can only be used inside the function. The global variable with the same name will remain as it was, global and with the original value.
            </div>
            <h4>The Global Keyword</h4>
            <div className="m-bottom-30">
                Normally, when you create a variable inside a function, that variable is local, and can only be used inside that function.
            </div>
            <div className="m-bottom-30">
                To create a global variable inside a function, you can use the <code className="bg-grey text-danger">global</code> keyword.
            </div>
            <div className="m-bottom-30">
                Also, use the <code className="bg-grey text-danger">global</code> keyword if you want to change a global variable inside a function.
            </div>
            <div className="m-bottom-30">
                <a href="/python-variables-names" className="bg-green text-white m-inline-15rem p-block-5 p-inline-10 border-green border-radius-5 t-decoration-none">
                    Previous
                </a>
                <a href="/python-datatypes" className="bg-green text-white m-inline-15rem p-block-5 p-inline-10 border-green border-radius-5 t-decoration-none">
                    Next
                </a>
            </div>
        </div>
    );
}

export default PythonGlobalVariables;