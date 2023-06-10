'use client';
import 'pannellum';
import 'pannellum/build/pannellum.css';
import React, { useEffect, useRef } from 'react';

declare namespace pannellum {
    interface viewerOptions extends Partial<ViewerOptions> {
        type: string;
        panorama: string;
        // Add other options here
    }

    interface viewer {
        destroy: () => void;
        getContainer: () => HTMLElement;
        loadScene: (sceneId: string | number, config: any, immediate?: boolean) => void;
        getScene: () => any;
        setScene: (sceneId: string | number, config: any, fadeDuration?: number) => void;
        isLoaded: () => boolean;
        toggleFullscreen: () => void;
        getConfig: () => any;
        getRenderer: () => any;
        addHotSpot: (hotSpot: any) => void;
        removeHotSpot: (hotSpot: any) => void;
        getHotSpots: () => any[];
        clearHotSpots: () => void;
        resize: () => void;
        onMouseDown: (event: MouseEvent) => void;
        onMouseMove: (event: MouseEvent) => void;
        onMouseUp: (event: MouseEvent) => void;
        onTouchStart: (event: TouchEvent) => void;
        onTouchMove: (event: TouchEvent) => void;
        onTouchEnd: (event: TouchEvent) => void;
        onOrientationChange: () => void;
        onFullScreenChange: () => void;
        onResize: () => void;
    }

    function viewer(container: HTMLElement, options: viewerOptions): viewer;
}

interface PanoramaViewerProps {
    imagePath: string;
    hotSpots: Hotspot[];
    autoLoad?: boolean;
    autoRotate?: number;
    compass?: boolean;
    showControls?: boolean;
    width?: string;
    height?: string;

    haov?: number;
    vaov?: number;

    hotSpotDebug?: boolean;
}

export interface Hotspot {
    pitch: number;
    yaw: number;
    type: string;
    text?: string;
    URL?: string;
    cssClass?: string;
    onClick?: Function;
    createTooltipFunc?: Function;
}

interface ViewerOptions {
    type: string;
    panorama: string;
    autoLoad?: boolean;
    autoRotate?: number;
    hotSpotDebug?: boolean;
    yaw?: number;
    pitch?: number;
    hfov?: number;
    vaov?: number;
    minHfov?: number;
    maxHfov?: number;
    minPitch?: number;
    maxPitch?: number;
    showControls?: boolean;
    showZoomCtrl?: boolean;
    keyboardZoom?: boolean;
    mouseZoom?: boolean;
    showFullscreenCtrl?: boolean;
    compass?: boolean;
    compassOffset?: [number, number];
    hotSpots?: PanenellumHotSpot[];
}

interface PanenellumHotSpot {
    pitch: number;
    yaw: number;
    type: string;
    text?: string;
    URL?: string;
    cssClass?: string;
    createTooltipFunc?: Function;
    clickHandlerFunc?: Function;
}

const defaultConfig: ViewerOptions = {
    type: 'equirectangular',
    panorama: '',
    autoLoad: true,
    autoRotate: 0,
    hotSpotDebug: false,
    yaw: 0,
    pitch: 0,
    hfov: 100,
    vaov: 75,
    minHfov: 50,
    maxHfov: 120,
    minPitch: -90,
    maxPitch: 90,
    showZoomCtrl: true,
    keyboardZoom: true,
    mouseZoom: true,
    showFullscreenCtrl: true,
    compass: true,
    compassOffset: [10, 10],
    hotSpots: [],
};

const PanoramaViewer: React.FC<PanoramaViewerProps> = ({
    imagePath,
    hotSpots,
    autoLoad,
    autoRotate,
    compass,
    showControls,
    width,
    height,
    hotSpotDebug
}) => {
    const viewerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let viewer: pannellum.viewer | null = null;

        // Initialize the Pannellum viewer
        if (viewerRef.current) {
            viewer = pannellum.viewer(viewerRef.current, {
                type: 'equirectangular',
                panorama: imagePath,
                autoLoad: !!autoLoad,
                autoRotate: autoRotate || 0,
                hotSpotDebug: !!hotSpotDebug,
                compass: !!compass,
                showControls: !!showControls,
                hotSpots: hotSpots.map(hotSpot => ({ ...hotSpot, clickHandlerFunc: hotSpot.onClick })),
            });

            // console.warn(viewer)

        }


        // Clean up the viewer on component unmount
        return () => {
            if (viewer) {
                viewer.destroy();
            }
        };
    }, [imagePath, hotSpots]);

    const divStyle = {
        width: width || "100%",
        height: height || "100%",
    };

    return <div ref={viewerRef} style={divStyle} />;
};

export default PanoramaViewer;
