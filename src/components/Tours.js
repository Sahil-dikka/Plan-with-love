import Card from "./Card";

function Tours({tours,removeTour}){

    return (

        <div className="container">

            <div className="title">
                <h2>Plan With love</h2>
            </div>
            
            <div className="cards">
                {
                    tours.map( (tours) => {
                        return <Card {...tours} removeTour={removeTour}></Card>
                    })
                }
            
            </div> 
        </div>
    )
}

export default Tours;