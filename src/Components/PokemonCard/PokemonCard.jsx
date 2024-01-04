import React, { useEffect, useState } from 'react';

const PokemonCard = (props) => {
    const [names, setNames] = useState([]);
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = props.data;
            setNames(data);
            const imageData = await Promise.all(
                data.map(async (item) => {
                    const response = await fetch(item.url);
                    const dataImg = await response.json();
                    const imageUrl = dataImg.sprites.other.dream_world.front_default;
                    return imageUrl;
                })
            );
            setUrls(imageData);
        };
        fetchData();
    }, [props.data]);

    return (
        <div className='cards'>
            {names.map((item, index) => (
                <div className='card' key={index}>
                    <img
                        src={urls[index]}
                        width="200px"
                        height="200px"
                        alt={`${item.name}-img`}
                    />
                    <h4>{item.name}</h4>
                </div>
            ))}
        </div>
    );
};

export default PokemonCard;
