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
            <AboutPython/>
            <h4>What can Python do?</h4>
            <PythonUses/>
            <h4>Why Python?</h4>
            <WhyPython/>
            <h4>Good to know</h4>
            <PythonFacts/>
            <h4>Python Syntax compared to other programming languages</h4>
            <PythonSyntax/>
            <PythonExample1/>
        </div>
    );
}

export default PythonIntroduction;