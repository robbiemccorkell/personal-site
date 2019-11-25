import { useRef, useEffect, useState } from "react";

interface Props {
  presentationId: string;
  verticalEnabled?: boolean;
  autoPlay?: boolean;
}

const SlidesLive: React.FunctionComponent<Props> = ({
  presentationId,
  verticalEnabled = true,
  autoPlay = false
}) => {
  const script = `
    embed = new SlidesLiveEmbed('presentation-embed-${presentationId}', {
      presentationId: '${presentationId}',
      autoPlay: ${autoPlay},
      verticalEnabled: ${verticalEnabled}
    });
  `;

  const elementRef = useRef<HTMLDivElement>(null);
  const [mainScriptLoaded, updateScriptLoaded] = useState(false);

  useEffect(() => {
    if (elementRef.current) {
      const mainScript = document.createElement("script");
      mainScript.src = "https://slideslive.com/embed_presentation.js";
      mainScript.async = true;
      mainScript.onload = () => updateScriptLoaded(true);

      elementRef.current.appendChild(mainScript);
    }
  }, [script]);

  useEffect(() => {
    if (mainScriptLoaded && elementRef.current) {
      const embedScript = document.createElement("script");
      embedScript.async = true;
      embedScript.append(script);

      elementRef.current.appendChild(embedScript);
    }
  }, [mainScriptLoaded]);

  return (
    <div ref={elementRef}>
      <div id={`presentation-embed-${presentationId}`}></div>
    </div>
  );
};

export default SlidesLive;
