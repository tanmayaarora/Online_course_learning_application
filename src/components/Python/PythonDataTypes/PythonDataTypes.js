import DataTypeExamplesTable from "./DataTypeExamplesTable";
import PythonBuiltInDataTypes from "./PythonBuiltInDataTypes";

const PythonDataTypes = () => {
    return (
        <div>
            <h2>Python Data Types</h2>
            <h4>Built-in Data Types</h4>
            <div className="m-bottom-30">In programming, data type is an important concept.</div>
            <div className="m-bottom-30">
                Variables can store data of different types and different types can do different things.
            </div>
            <div>
                Python has the following data types built-in by default in these categories:
                <PythonBuiltInDataTypes/>
            </div>
            <h4>Getting the Data Type</h4>
            <div>You can get the data type of any object using the <code className="bg-grey text-danger">type()</code> function</div>
            <h4>Setting the Data Type</h4>
            <div className="m-bottom-30">In Python, the data type is set when you assign a value to the variable:</div>
            <DataTypeExamplesTable/>
        </div>
    );
}

export default PythonDataTypes;