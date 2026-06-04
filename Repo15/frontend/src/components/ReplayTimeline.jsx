export default function ReplayTimeline({ timeline }) {

  return (
    <div>

      <h3>REPLAY TIMELINE</h3>

      {timeline?.map((item, index) => (

        <div key={index} className="timeline-row">

          <span>{item.event.type}</span>

          <span>
            {new Date(item.event.timestamp).toLocaleTimeString()}
          </span>

        </div>

      ))}

    </div>
  );
}