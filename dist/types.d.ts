declare module 'react-pannellum-next' {
    import React from 'react';

    namespace pannellum {
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

    const PanoramaViewer: React.FC<PanoramaViewerProps>;

    export {
        PanoramaViewer
    };
}
