# PanoramaViewer Component | IT WORKS!

> The `PanoramaViewer` component is a React component that provides a panoramic image viewer using the Pannellum library. It allows you to display a 360-degree image and add interactive hotspots to it.

> This library use source from [https://pannellum.org/](https://pannellum.org/)

## Installation

To install the `PanoramaViewer` component, you can use your favorite package manager:

```bash
npm install --save react-pannellum-next
```

```bash
yarn add react-pannellum-next
```


## Usage 

```tsx
import React from 'react';
import { PanoramaViewer, HotspotProps } from 'react-pannellum';

const App: React.FC = () => {
  const hotSpots: HotspotProps[] = [
    { pitch: 0, yaw: 0, type: 'info', text: 'Welcome!' },
    // Add more hotspots here
  ];

  return (
    <div>
      <h1>My Panorama Viewer</h1>
      <PanoramaViewer imagePath="/path/to/panorama.jpg" hotSpots={hotSpots} />
    </div>
  );
};

export default App;

```

## Usage with Next JS

```tsx
import React from 'react';
import { HotspotProps } from 'react-pannellum-next';

const DynamicPanoramaViewer = dynamic(() => import('react-pannellum-next').PanoramaViewer, {
    ssr: false, // Disable server-side rendering for this component
});

const App: React.FC = () => {

  const hotSpots: HotspotProps[] = [
    { pitch: 0, yaw: 0, type: 'info', text: 'Welcome!' },
    // Add more hotspots here
  ];

  return (
    <div>
      <h1>My Panorama Viewer</h1>
      <DynamicPanoramaViewer imagePath="/path/to/panorama.jpg" hotSpots={hotSpots} />
    </div>
  );
};

export default App;

```

Connect on LinkedIn: [Loïc Kami](https://www.linkedin.com/in/lo%C3%AFc-kami-78a855265/)