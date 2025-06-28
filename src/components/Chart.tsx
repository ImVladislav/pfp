import { useEffect, useRef } from "react";

const TradingViewWidget = ({
  symbol = "BINANCE:BTCUSDT",
  width = "100%",
  height = 500,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      
      // Set iframe properties
      iframe.style.border = "none";
      iframe.style.borderRadius = "8px";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
    }
  }, []);

  const dexScreenerUrl = "https://dexscreener.com/solana/7SiUnuZbN8pwu4H5q3KbD644VHjrGra6oGgr8ZCxpump?theme=light";

  return (
    <div className='tradingview-widget-container' style={{ width, height }}>
      <iframe
        ref={iframeRef}
        src={dexScreenerUrl}
        title="DexScreener Widget"
        allowFullScreen
      />
    </div>
  );
};

export default TradingViewWidget;
