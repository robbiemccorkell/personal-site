import { parseISO, format } from "date-fns";
import P from "../components/P";

interface Props {
  title: string;
  description: string;
  date: string;
  location: string;
}

const TalkItem: React.FunctionComponent<Props> = ({
  children,
  title,
  date,
  description,
  location
}) => (
  <div className="talk-item">
    <h3>{title}</h3>
    <p className="date">
      {format(parseISO(date), "MMMM yyyy")} -{" "}
      <span className="location">{location}</span>
    </p>
    <P>{description}</P>
    {children}
    <style jsx>{`
      .talk-item {
        border-bottom: 2px solid black;
        margin-top: 32px;
        padding-bottom: 32px;
      }
      .talk-item:last-child {
        border-bottom: none;
      }
      h3 {
        font-size: 20px;
      }
      .date {
        color: #999999;
        font-size: 16px;
      }
      .location {
        font-style: italic;
      }
    `}</style>
  </div>
);

export default TalkItem;
