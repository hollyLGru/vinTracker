import React from "react"


function CarImages({carData, year}) {

    let url = `https://cdn.imagin.studio/getImage?customer=uszollege&make=${carData[7].Value}&modelFamily=${carData[9].Value}&modelYear=${year}`
    let urlTwo = `https://cdn.imagin.studio/getImage?customer=uszollege&make=${carData[7].Value}&modelFamily=${carData[9].Value}&modelYear=${year}&angle=05`
    let urlThree = `https://cdn.imagin.studio/getImage?customer=uszollege&make=${carData[7].Value}&modelFamily=${carData[9].Value}&modelYear=${year}&angle=13`
    return (
        <div style={{display: "flex", justifyContent: 'center'}}>
            <img src={url} style={{width: "25%"}} />
            <img src={urlTwo} style={{width: "25%"}} />
            <img src={urlThree} style={{width: "25%"}} />
        </div>
    );
}

export default CarImages;