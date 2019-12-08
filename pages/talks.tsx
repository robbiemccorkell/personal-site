import YouTube from "../components/YouTube";
import SlidesLive from "../components/SlidesLive";
import TalkItem from "../components/TalkItem";
import Layout from "../components/Layout";

const talks = [
  {
    title: "Mixing ReasonML into your React apps",
    date: "2017-09-01T12:00:00.000Z",
    description:
      "ReasonML is a super interesting language and toolset but not all of us have the luxury of a brand new greenfield project to use it in. In this talk I'll explore some of the methods Bucklescript provides to mix ReasonML together with the Javascript in your projects. I'll also explore some ideas on the best areas in your project to get started converting JS to Reason, and the benefits you'll gain from doing so.",
    location: "React London Meetup",
    renderContent: () => <YouTube videoId="gZweJw_egaE" />
  },
  {
    title: "React London 2017 panel discussion",
    date: "2017-03-01T12:00:00.000Z",
    description:
      "Panel discussion with Ben Alpert, Dan Abramov, Lee Byron and Christopher Chedeau led by Robbie McCorkell",
    location: "React London Conference",
    renderContent: () => <YouTube videoId="TMun9g5o7OA" />
  },
  {
    title: "Building the world's largest grocery site",
    date: "2015-11-01T12:00:00.000Z",
    description:
      "Codemotion Milan 2015 - Since the beginning of 2014 we have been working with Tesco groceries to build a brand new online platform using React. Earlier this year we launched a new mobile site for Tesco's international grocery business, releasing for 7 countries and 7 different languages. Since then we have been hard at work on further products, constantly adapting and enhancing our approach along the way. Join me while I take a walk through our journey so far, discussing the technology and process decisions we made, and lessons learned along the way, and hopes for the future.",
    location: "Codemotion Milan",
    renderContent: () => <YouTube videoId="lVlePaK35S8" />
  },
  {
    title: "Cross-platform React",
    date: "2015-06-01T12:00:00.000Z",
    description: "Reusing your code between the web and React Native",
    location: "React London Meetup",
    renderContent: () => <YouTube videoId="KH_WFiCJuKo" />
  },
  {
    title: "Supercharging your React applications",
    date: "2015-09-01T12:00:00.000Z",
    description:
      "Over the last year React has quickly changed from being the new kid on the block, to the next big framework everyone wants to use. As the React community grows, so too does the number of great ideas and tools people can use in their own React apps. Many of these tools have no official implementation, but can be extremely useful to integrate into your apps. In this talk I will discuss some of the latest ideas the React community has to offer, and how you can use them to supercharge your React applications, including isomorphic rendering and routing, the advantages of global application state, immutable data structure and how they make React even better – and more!",
    location: "WebExpo Prague",
    renderContent: () => <SlidesLive presentationId="38894531" />
  },
  {
    title: "Intro to Firebase in React",
    date: "2014-09-01T12:00:00.000Z",
    description: "Creating quick live-syncing web apps with Firebase and React",
    location: "React London Meetup",
    renderContent: () => <YouTube videoId="XAA2DGbxPrk?start=6240" />
  },
  {
    title: "Going native with React",
    date: "2015-02-01T12:00:00.000Z",
    description: "An introduction to React Native",
    location: "React London Meetup",
    renderContent: () => <YouTube videoId="3wcouW5lXto?start=2242" />
  },
  {
    title: "Pride in London and Red Badger",
    date: "2018-07-01T12:00:00.000Z",
    description:
      "An Intro Into Building the Pride London app using React Native",
    location: "React London Meetup",
    renderContent: () => <YouTube videoId="sYEFM0HWa9I?start=281" />
  }
];

const Talks = () => (
  <Layout pageTitle="Talks">
    <div>
      {talks
        .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
        .map(talk => (
          <TalkItem
            key={`${talk.title}-${talk.date}`}
            title={talk.title}
            date={talk.date}
            description={talk.description}
            location={talk.location}
          >
            {talk.renderContent()}
          </TalkItem>
        ))}
    </div>
  </Layout>
);

export default Talks;
