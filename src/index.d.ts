import * as React from 'react';

export interface HotspotProps {
	pitch: number;
	yaw: number;
	type: string;
	cssClass: string;
	text?: string;
	URL?: string;
	target?: string;
	onClick?: () => void
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

declare const PanoramaViewer: React.FC<PanoramaViewerProps>;

export default PanoramaViewer;
