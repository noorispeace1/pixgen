import React from 'react';
import PhotoCard from './PhotoCard';

const TopGenerations = async() => {
    const res = await fetch("https://pixgen-eosin.vercel.app/data.json");
    const photos = await res.json();
    const topPhotos = photos.slice(0, 8); // Get the top 6 photos
    return (
        <div>
            <h1 className='text-2xl font-bold mt-4'>Top Generations</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 '>{topPhotos.map(photo =>  <PhotoCard key={photo.id} photo={photo} />)}</div>
        </div>
        
    );
};

export default TopGenerations;