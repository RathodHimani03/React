import { Link } from "react-router-dom";


const DummyList = [

    { id: 'e1', name: 'event1' },
    { id: 'e2', name: 'event2' },
    { id: 'e3', name: 'event3' },
    { id: 'e4', name: 'event4' },
    { id: 'e5', name: 'event5' },

]




function EventsPage() {
    return (
        <>
            <ul>
                {DummyList.map(event =>
                    <li>
                        <Link to={event.id} >{event.name}</Link>

                    </li>
                )}


            </ul>
        </>
    );
};


export default EventsPage;