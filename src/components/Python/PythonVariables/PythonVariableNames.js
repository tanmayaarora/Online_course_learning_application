const PythonVariableNames = () => {
    return (
        <div>
            <h2>Python - Variable Names</h2>
            <h4>Variable Names</h4>
            <div className="m-bottom-30">
                A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume). Rules for Python variables:
                <ul>
                    <li>A variable name must start with a letter or the underscore character</li>
                    <li>A variable name cannot start with a number</li>
                    <li>A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )</li>
                    <li>Variable names are case-sensitive (age, Age and AGE are three different variables)</li>
                    <li>A variable name cannot be any of the Python keywords.</li>
                </ul>
            </div>
            <div className="bg-yellow large-text-size m-bottom-30 p-block-30">
                Remember that variable names are case-sensitive
            </div>
            <div>
                <a href="/python-variables" className="bg-green text-white m-inline-15rem p-block-5 p-inline-10 border-green border-radius-5 t-decoration-none">
                    Previous
                </a>
                <a href="/python-variables-global" className="bg-green text-white m-inline-15rem p-block-5 p-inline-10 border-green border-radius-5 t-decoration-none">
                    Next
                </a>
            </div>
        </div>
    );
}

export default PythonVariableNames;