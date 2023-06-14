require("./index.css");
require("pannellum");
require("pannellum/build/pannellum.css");
var $b4te3$react = require("react");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "PanoramaViewer", function () { return $332b06753a23f2ac$export$2e2bcd8739ae039; });



"use client";
const $332b06753a23f2ac$var$defaultConfig = {
    type: "equirectangular",
    panorama: "",
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
    compassOffset: [
        10,
        10
    ],
    hotSpots: []
};
const $332b06753a23f2ac$var$PanoramaViewer = ({ imagePath: imagePath , hotSpots: hotSpots , autoLoad: autoLoad , autoRotate: autoRotate , compass: compass , showControls: showControls , width: width , height: height , hotSpotDebug: hotSpotDebug  })=>{
    const viewerRef = (0, $b4te3$react.useRef)(null);
    (0, $b4te3$react.useEffect)(()=>{
        let viewer = null;
        // Initialize the Pannellum viewer
        if (viewerRef.current) viewer = pannellum.viewer(viewerRef.current, {
            type: "equirectangular",
            panorama: imagePath,
            autoLoad: !!autoLoad,
            autoRotate: autoRotate || 0,
            hotSpotDebug: !!hotSpotDebug,
            compass: !!compass,
            showControls: !!showControls,
            hotSpots: hotSpots && hotSpots.map((hotSpot)=>Object.assign(Object.assign({}, hotSpot), {
                    clickHandlerFunc: hotSpot.onClick
                }))
        });
        // Clean up the viewer on component unmount
        return ()=>{
            if (viewer) viewer.destroy();
        };
    }, [
        imagePath,
        hotSpots
    ]);
    const divStyle = {
        width: width || "100%",
        height: height || "100%"
    };
    return /*#__PURE__*/ (0, ($parcel$interopDefault($b4te3$react))).createElement("div", {
        ref: viewerRef,
        style: divStyle
    });
};
var $332b06753a23f2ac$export$2e2bcd8739ae039 = $332b06753a23f2ac$var$PanoramaViewer;




//# sourceMappingURL=index.js.map
