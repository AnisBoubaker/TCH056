function elementToJson(element, includeElementType=false, includeId=false, includeClassName=false) {
    // Handle text nodes
    if (element.nodeType === Node.TEXT_NODE) {
        // Ignoring empty text nodes (whitespace)
        if (element.nodeValue.trim() !== '') {
            return { name: 'text', value: element.nodeValue.trim() };
        }
        return null;
    }

    // Get the tag name and class name
    var name = element.tagName.toLowerCase();
    var elementName = element.constructor.name;
    
    if(includeId && element.id){
        name = name+ "#" + element.id;
    }
    if(includeClassName && element.className){
        
        name = name +  '.' + Array.from(element.classList).join('.');
    }
    var json
    if(includeElementType){
        json = { name: `${name} (${elementName})` };
    }
    else {
        json = { name: `${name}` };
    }

    // Process children if they exist
    if (element.childNodes.length > 0) {
        json.children = [];
        element.childNodes.forEach(function(child) {
            var childJson = elementToJson(child, includeElementType, includeId, includeClassName);
            if (childJson) { // Only add if it's not null (ignoring empty text nodes)
                json.children.push(childJson);
            }
        });
    }

    return json;
}



function htmlToJson(htmlString, includeElementType=false, includeId=false, includeClassName=false, bodyContentOnly=false) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(htmlString, 'text/html');

    
    var rootJson ;

    if(bodyContentOnly){
        doc = doc.querySelector('body');
        className = doc.constructor.name;
        if(includeElementType){
            rootJson = { name: `body (${className})`, children: [] };
        } else {
            rootJson = { name: `body`, children: [] };
        }
        
        for(i=0; i<doc.childNodes.length; i++)
        {
            rootJson.children.push(elementToJson(doc.childNodes[i], includeElementType, includeId, includeClassName));
        }
        
    }
    else {
        // Getting the class name of the document
        var className = doc.constructor.name;
        if(includeElementType){
            rootJson = { name: `document (${className})`, children: [] };
        } else {
            rootJson = { name: `document`, children: [] };
        }
        rootJson.children.push(elementToJson(doc.documentElement, includeElementType, includeId, includeClassName));
    }
    
    

    

    return rootJson;
}

