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
            <div className="m-bottom-30">
                <a href="/python-intro" className="bg-green text-white m-inline-15rem p-block-5 p-inline-10 border-green border-radius-5 t-decoration-none">
                    Previous
                </a>
                <a href="/python-variables" className="bg-green text-white m-inline-15rem p-block-5 p-inline-10 border-green border-radius-5 t-decoration-none">
                    Next
                </a>
            </div>
        </div>
    );
}

export default PythonGettingStarted;