'use client';
import React, { useEffect, useRef } from "react";
import "./pannellum/css/pannellum.css";
import "./pannellum/css/style-textInfo.css";
import "./pannellum/js/libpannellum.js";
import "./pannellum/js/pannellum.js";
import "./pannellum/js/RequestAnimationFrame";
import "./styles.css"

export interface PanoramaViewerProps {
    imagePath: string;
    hotSpots?: HotspotProps[];
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

export interface HotspotProps {
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
                hotSpots: hotSpots && hotSpots.map(hotSpot => ({ ...hotSpot, clickHandlerFunc: hotSpot.onClick })),
            });

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
