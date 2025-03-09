import { infoType } from "../App";

const Details = (props: infoType) => {
    return (
        <div key={props.id}>
            <img src={props.avatar} alt={props.name} />
            <p>City: {props.details.city}</p>
            <p>Company: {props.details.company}</p>
            <p>Position: {props.details.position}</p>
        </div>
    );
}

export default Details;


