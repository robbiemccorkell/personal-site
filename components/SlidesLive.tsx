interface Props {
  presentationId: string;
  verticalEnabled: boolean;
  autoPlay: boolean;
}

const SlidesLive: React.FunctionComponent<Props> = ({
  presentationId,
  verticalEnabled = true,
  autoPlay = false
}) => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
    <div id="presentation-embed-${presentationId}"></div>
    <script src='https://slideslive.com/embed_presentation.js'></script>
    <script>
        embed = new SlidesLiveEmbed('presentation-embed-${presentationId}', {
            presentationId: '${presentationId}',
            autoPlay: ${autoPlay},
            verticalEnabled: ${verticalEnabled}
        });
    </script>
  `
    }}
  />
);

export default SlidesLive;
