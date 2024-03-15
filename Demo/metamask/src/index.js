import MetaMaskSDK from "@metamask/sdk";
// MetaMaskSDK = require("@metamask/sdk")
const options = {
    injectProvider: false,
    communicationLayerPreference: 'webrtc',
  };
  
  const MMSDK = new MetaMaskSDK(options);

const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum
ethereum.request({ method: 'eth_requestAccounts', params: [] });