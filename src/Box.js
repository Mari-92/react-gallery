
function Box(co) {
    return(
        <div className='box' >
            <img src={co.dogimg} alt="boxer" />
            <p>{co.dogname}</p>
        </div>
    )
}

export default Box