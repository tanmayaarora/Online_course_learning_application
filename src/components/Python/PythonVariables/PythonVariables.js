const PythonVariables = () => {
    return (
        <div>
            <h2>Python Variables</h2>
            <h4>Variables</h4>
            <div>Variables are containers for storing data values.</div>
            <h4>Creating Variables</h4>
            <div>Python has no command for declaring a variable</div>
            <div className="m-bottom-30">
                A variable is created the moment you first assign a value to it.
            </div>
            <div className="m-bottom-30">Variables do not need to be declared with any particular type and can even change type after they have been set.</div>
            <h4>Casting</h4>
            <div>If you want to specify the data type of a variable, this can be done with casting.</div>
            <h4>Get the Type</h4>
            <div>You can get the data type with the <code className="bg-grey">type()</code> function.</div>
            <h4>Single or Double Quotes?</h4>
            <div>String variables can be declared either by using single or double quotes</div>
            <h4>Case-Sensitive</h4>
            <div className="m-bottom-30">Variable names are case-sensitive.</div>
            <div className="m-bottom-30">
                <a href="/python-getstarted" className="bg-green text-white m-inline-15rem p-block-5 p-inline-10 border-green border-radius-5 t-decoration-none">
                    Previous
                </a>
                <a href="/python-variables-names" className="bg-green text-white m-inline-15rem p-block-5 p-inline-10 border-green border-radius-5 t-decoration-none">
                    Next
                </a>
            </div>
        </div>
    );
}

export default PythonVariables;