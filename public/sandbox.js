"use strict";
/**
 *
 * Based on Tomasz Nurkiewiczs answer, the "problem" is that typescript is typesafe. :)
 * So the document.getElementById() returns the type HTMLElement which does not contain a value property.
 * The subtype HTMLInputElement does however contain the value property.
 *
 */
let selectedItem = () => {
    var item = document.getElementById("type");
    console.log(item.value);
};
