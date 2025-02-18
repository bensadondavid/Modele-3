
function Language({activeLanguage, handleLanguage}){

    return(
        <>
        <div className="langue">
            <div className="langue-button">
                <button
                onClick={() => handleLanguage("francais")}
                className={`francais ${activeLanguage === "francais" ? "active" : ""}`}
                >
                Fr
                </button>
                <button
                onClick={() => handleLanguage("hebreu")}
                className={`hebreu ${activeLanguage === "hebreu" ? "active" : ""}`}
                >
                א
                </button>
            </div>
        </div>
        </>
    )
}

export default Language