export default function(element, properties) {
  const transitionId = Math.random()
    .toString(36)
    .substring(7); // used to identify classes for cleanup
  const documentHead = document.getElementsByTagName("head")[0];

  let tempStyles = [];
  let transitions = [];
  for (const [property, options] of Object.entries(properties)) {
    // build transition: string
    let duration = options.duration ? options.duration + "ms" : "";
    let easing = options.easing ? options.easing + "" : "";
    let delay = options.delay ? options.delay + "ms" : "";
    transitions.push(`${duration} ${property} ${easing} ${delay}`);

    // create class for initial styles and add to stylesheet
    const classname = transitionId + "-" + property;
    let style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = `.${classname} { ${property}: ${options.from}; }`;
    documentHead.appendChild(style);
    tempStyles.push(style);

    // add class to element
    element.classList.add(classname);
  }

  // add transition to element
  element.style.transition = transitions.join(", ");

  setTimeout(() => {
    // start transition
    for (const [property, options] of Object.entries(properties)) {
      element.style[property] = options.to;
    }
  }, 100);

  // listen for transitionEnd
  let trackedTransitions = Object.keys(properties);
  element.addEventListener("transitionend", event => {
    setTimeout(() => {
      trackedTransitions.splice(trackedTransitions.indexOf(event.propertyName), 1);
      if (trackedTransitions.length === 0) {
        // for (style of tempStyles) {
        //   documentHead.removeChild(style);
        // }

        // clean up leftover styling

        for (const [property, options] of Object.entries(properties)) {
          element.style[property] = null;

          element.classList.remove(transitionId + "-" + property);
        }
        element.style.transition = null;

        // end promise
      }
    }, 100);
  });
}
