import React from 'react';
import image from './images/alma.jpg';
import PanoramaViewer from './PanoramaViewer';

// declare module '*.jpg' {
//   const value: string;
//   export default value;
// }


const App: React.FC = () => {
    return <PanoramaViewer
        autoLoad
        imagePath={image}
        hotSpotDebug
        hotSpots={[
            {
                yaw: -50,
                pitch: 4,
                type: 'info',
                cssClass: 'custom-hotspot',
                onClick: () => console.log('Hotspot clicked!')
            }
        ]}
    />;
};

export default App;
