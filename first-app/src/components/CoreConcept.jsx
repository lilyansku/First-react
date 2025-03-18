
export default function CoreConcept({image, title, description}) {
    return (
      <li className="core-concept">
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }