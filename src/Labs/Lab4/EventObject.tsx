import { useState } from "react";

export default function EventObject() {
  const [event, setEvent] = useState<{
    target?: string;
    type?: string;
    timestamp?: number;
  } | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const eventData = {
      target: (e.target as HTMLElement).outerHTML,
      type: e.type,
      timestamp: e.timeStamp
    };
    setEvent(eventData);
  };

  return (
    <div>
      <h2>Event Object</h2>
      <button
        onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr />
    </div>
  );
}