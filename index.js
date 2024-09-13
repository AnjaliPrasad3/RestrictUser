// index.js
document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const property = document.getElementById('property').value.trim();
    const value = document.getElementById('value').value.trim();

    if (!property || !value) {
        alert('Please enter both property name and value.');
        return;
    }

    // Create a base object
    const baseObject = {
        name: 'John',
        age: 30
    };

    // Demonstrate Object.preventExtensions()
    const preventExtensionsObject = Object.preventExtensions({ ...baseObject });
    preventExtensionsObject[property] = value;

    // Demonstrate Object.seal()
    const sealObject = Object.seal({ ...baseObject });
    sealObject[property] = value;

    // Demonstrate Object.freeze()
    const freezeObject = Object.freeze({ ...baseObject });
    freezeObject[property] = value;

    // Display the results on the web page
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h2>Base Object:</h2>
        <pre>${JSON.stringify(baseObject, null, 2)}</pre>

        <h2>Object.preventExtensions() Result:</h2>
        <pre>${JSON.stringify(preventExtensionsObject, null, 2)}</pre>

        <h2>Object.seal() Result:</h2>
        <pre>${JSON.stringify(sealObject, null, 2)}</pre>

        <h2>Object.freeze() Result:</h2>
        <pre>${JSON.stringify(freezeObject, null, 2)}</pre>
    `;

    // Adding property to show the difference
    outputDiv.innerHTML += `
        <h3>Note:</h3>
        <p>Properties added to the result objects will be shown only for Object.preventExtensions(). For Object.seal(), existing properties can be modified, but new properties cannot be added. For Object.freeze(), neither properties can be added nor modified.</p>
    `;
});
