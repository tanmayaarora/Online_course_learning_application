import AboutPython from "./AboutPython";
import PythonExample1 from "./PythonExample1";
import PythonFacts from "./PythonFacts";
import PythonSyntax from "./PythonSyntax";
import PythonUses from "./PythonUses";
import WhyPython from "./WhyPython";

const PythonIntroduction = () => {
    return (
        <div>
            <h2>Python Introduction</h2>
            <h4>What is Python?</h4>
            <AboutPython />
            <h4>What can Python do?</h4>
            <PythonUses />
            <h4>Why Python?</h4>
            <WhyPython />
            <h4>Good to know</h4>
            <PythonFacts />
            <h4>Python Syntax compared to other programming languages</h4>
            <PythonSyntax />
            <PythonExample1 />
            <div className="m-bottom-30">
                <a href="/" className="bg-green text-white m-inline-15rem p-block-5 p-inline-10 border-green border-radius-5 t-decoration-none">
                    Previous
                </a>
                <a href="/python-getstarted" className="bg-green text-white m-inline-15rem p-block-5 p-inline-10 border-green border-radius-5 t-decoration-none">
                    Next
                </a>
            </div>
        </div>
    );
}

export default PythonIntroduction;