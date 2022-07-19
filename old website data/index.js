function getElement(index, type) {
    // index: 0-4 correspond to the tab name
    // type:  b corresponds to button, t the tab

    const tabs  = ["background", "experience", "community", "competition", "personal"];
   
    if (type == 'b') return document.getElementById("btn-" + tabs[index]);
    if (type == 't') return document.getElementById("tab-" + tabs[index]);
}

window.onload = function() {

    removeAllTabs = function() {
        for (var i = 0; i < 5; i++) {
            getElement(i, 't').classList.remove("current-tab");
            getElement(i, 'b').classList.remove("current-btn");
        }
    }

    // This is the important part!

    function collapseSection(element) {
        // get the height of the element's inner content, regardless of its actual size
        var sectionHeight = element.scrollHeight;
        
        // temporarily disable all css transitions
        var elementTransition = element.style.transition;
        element.style.transition = '';
    
        // on the next frame (as soon as the previous style change has taken effect),
        // explicitly set the element's height to its current pixel height, so we 
        // aren't transitioning out of 'auto'
        requestAnimationFrame(function() {
            element.style.height = sectionHeight + 'px';
            element.style.transition = elementTransition;

            // on the next frame (as soon as the previous style change has taken effect),
            // have the element transition to height: 0
            requestAnimationFrame(function() {
                element.style.height = 0 + 'px';
            });
        });
    
        // mark the section as "currently collapsed"
        element.setAttribute('data-collapsed', 'true');
    }
  
    function expandSection(element) {
        // get the height of the element's inner content, regardless of its actual size
        var sectionHeight = element.scrollHeight;
        
        // have the element transition to the height of its inner content
        element.style.height = sectionHeight + 'px';
        
        // when the next css transition finishes (which should be the one we just triggered)
        element.addEventListener('transitionend', function(e) {
            // remove this event listener so it only gets triggered once
            element.removeEventListener('transitionend', arguments.callee);
      
            // remove "height" from the element's inline styles, so it can return to its initial value
            element.style.height = null;
        });
    
        // mark the section as "currently not collapsed"
        element.setAttribute('data-collapsed', 'false');
    }

    for (var i = 0; i < 5; i++) {
        const btn = getElement(i, 'b');
        const tab = getElement(i, 't');
        
        tab.setAttribute('data-collapsed', 'false');
        btn.addEventListener("click", function(e) {
            e.preventDefault();

            // get current active tab
            var section = document.querySelector('.current-tab');

            // don't do anything if the tab clicked is the current tab
            if (section !== tab) {
                collapseSection(section);

                removeAllTabs();

                tab.classList.add("current-tab");
                btn.classList.add("current-btn");
                expandSection(tab);
                tab.setAttribute('data-collapsed', 'false');
                window.scrollTo(0, 0);
            }
        });

        btn.click();
    }

    // This part of the code ensures you are in the correct tab when accessing by URL using #tab-x.
    var full_url = document.URL; // Get current url
    var url_array = full_url.split('#')
    var last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)
    
    // get the portion represented by the tab and click it to focus on the tab.
    
    var split_str = last_segment.split("-");
    if (split_str.length > 1) { 
        var tab_id = split_str[1];
        document.querySelector("#btn-" + tab_id).click();
    } else {
        getElement(0, 'b').click();
    }
}

/*

    // This is the important part!

    function collapseSection(element) {
        // get the height of the element's inner content, regardless of its actual size
        var sectionHeight = element.scrollHeight;
        
        // temporarily disable all css transitions
        var elementTransition = element.style.transition;
        element.style.transition = '';
    
        // on the next frame (as soon as the previous style change has taken effect),
        // explicitly set the element's height to its current pixel height, so we 
        // aren't transitioning out of 'auto'
        requestAnimationFrame(function() {
            element.style.height = sectionHeight + 'px';
            element.style.transition = elementTransition;

            // on the next frame (as soon as the previous style change has taken effect),
            // have the element transition to height: 0
            requestAnimationFrame(function() {
                element.style.height = 0 + 'px';
            });
        });
    
        // mark the section as "currently collapsed"
        element.setAttribute('data-collapsed', 'true');
    }
  
    function expandSection(element) {
        // get the height of the element's inner content, regardless of its actual size
        var sectionHeight = element.scrollHeight;
        
        // have the element transition to the height of its inner content
        element.style.height = sectionHeight + 'px';
        
        // when the next css transition finishes (which should be the one we just triggered)
        element.addEventListener('transitionend', function(e) {
            // remove this event listener so it only gets triggered once
            element.removeEventListener('transitionend', arguments.callee);
      
            // remove "height" from the element's inline styles, so it can return to its initial value
            element.style.height = null;
        });
    
        // mark the section as "currently not collapsed"
        element.setAttribute('data-collapsed', 'false');
    }
  
    document.querySelector('#toggle-button').addEventListener('click', function(e) {
        var section = document.querySelector('.tab');
        var isCollapsed = section.getAttribute('data-collapsed') === 'true';
      
        if (isCollapsed) {
            expandSection(section);
            section.setAttribute('data-collapsed', 'false');
        } else {
            collapseSection(section);
        }
    });
*/