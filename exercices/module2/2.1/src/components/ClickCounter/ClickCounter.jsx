/*Veuillez continuer votre application et ajouter deux gestionnaires d'événements qui permettront :

    lors du passage de la souris sur le compteur, d'afficher un message au dessus du comptage de clics. Notez que ce message doit aussi être passé en props à ClickCounter.
    Vous passerez cette valeur pour votre application : "Please click on me now !".
    lorsque la souris quitte le compteur, ce message doit être enlevé.*/
import { useState } from "react";

function ClickCounter({ title, message, hoverMessage }) {
  const [count, setCount] = useState(0);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="card">
      <h4>{title}</h4>
      <button
        onClick={() => setCount((count) => count + 1)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        count is {count}
      </button>
      {hovered ? <p>{hoverMessage}</p> : null}
      {count >= 10 && <p>{message}</p>}
    </div>
  );
}

export default ClickCounter;
