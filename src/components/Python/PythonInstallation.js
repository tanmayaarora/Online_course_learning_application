const PythonInstallation = () => {
    return (
        <>
            <div>Many PCs and Macs will have python already installed.</div>
            <div className="m-bottom-30">To check if you have python installed on a Windows PC, search in the start bar for Python or run the following command on the Command Line (cmd.exe)</div>
            <div className="bg-grey m-bottom-30 p-block-30">
                <div className="bg-black p-block-5 text-white medium-text-size">
                    C:\Users\Your Name&gt;python --version
                </div>
            </div>
            <div className="m-bottom-30">To check if you have python installed on a Linux or Mac, then on linux open the command line or on Mac open the Terminal and type:</div>
            <div className="bg-grey p-block-30">
                <div className="bg-black p-block-5 text-white medium-text-size">
                    python --version
                </div>
            </div>
        </>
    );
}

export default PythonInstallation;