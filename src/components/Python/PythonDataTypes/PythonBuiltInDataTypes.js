const PythonBuiltInDataTypes = () => {
    return (
        <>
            <div className="large-text-size m-top-20">
                <div className="d-inline-block m-right-18to19rem">Text Type:</div>
                <div className="d-inline-block"><code className="bg-grey text-danger">str</code></div>
            </div>
            <div className="large-text-size m-top-10">
                <div className="d-inline-block m-right-4rem">Numeric Types:</div>
                <div className="d-inline-block m-inline-1rem">
                    <code className="bg-grey text-danger">int</code>,
                    <code className="bg-grey m-inline-1rem text-danger">float</code>,
                    <code className="bg-grey text-danger">complex</code>
                </div>
            </div>
            <div className="large-text-size m-top-10">
                <div className="d-inline-block m-right-4rem">Sequence Types:</div>
                <div className="d-inline-block m-inline-1rem">
                    <code className="bg-grey text-danger">list</code>,
                    <code className="bg-grey m-inline-1rem text-danger">tuple</code>,
                    <code className="bg-grey text-danger">range</code>
                </div>
            </div>
            <div className="large-text-size m-top-10">
                <div className="d-inline-block m-right-16to17rem">Mapping Type:</div>
                <div className="d-inline-block"><code className="bg-grey text-danger">dict</code></div>
            </div>
            <div className="large-text-size m-top-10">
                <div className="d-inline-block m-right-9rem">Set Types:</div>
                <div className="d-inline-block m-inline-1rem">
                    <code className="bg-grey text-danger">set</code>,
                    <code className="bg-grey m-inline-1rem text-danger">frozenset</code>
                </div>
            </div>
            <div className="large-text-size m-top-10">
                <div className="d-inline-block m-right-16to17rem">Boolean Type:</div>
                <div className="d-inline-block"><code className="bg-grey text-danger">bool</code></div>
            </div>
            <div className="large-text-size m-top-10">
                <div className="d-inline-block">Binary Types:</div>
                <div className="d-inline-block m-inline-1rem">
                    <code className="bg-grey text-danger">bytes</code>,
                    <code className="bg-grey m-inline-1rem text-danger">bytearray</code>,
                    <code className="bg-grey text-danger">memoryview</code>
                </div>
            </div>
        </>
    );
}

export default PythonBuiltInDataTypes;