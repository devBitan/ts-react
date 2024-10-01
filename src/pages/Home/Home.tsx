function Home() {
    //como es un método podemos crear variables
    let a = 1;
    //crear un metodo dentro de mi metodo
    const handleClick = (b:number) => {

        a = 10
    };

    return (
        <>
            <div>Home</div>
            <div>{a}</div>
            {/* <button onClick={handleClick}>transformamos A</button> */}
            {/* el motod recibe un parametro */}
            <button onClick={() => handleClick(a)}></button>
        </>
    )
}

export default Home

// https://www.youtube.com/watch?v=DGVijk69KIY&ab_channel=GentlemanProgramming min 30
// https://www.youtube.com/watch?v=Tmdg-jjoTGw&ab_channel=LeoC%C3%B3digos