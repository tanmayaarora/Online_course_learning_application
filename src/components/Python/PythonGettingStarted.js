import PythonInstallation from "./PythonInstallation";
import PythonQuickStart from "./PythonQuickStart";

const PythonGettingStarted = () => {
    return (
        <div>
            <h2>Python Getting Started</h2>
            <h4>Python Install</h4>
            <PythonInstallation/>
            <h4>Python Quickstart</h4>
            <PythonQuickStart/>
        </div>
    );
}

export default PythonGettingStarted;