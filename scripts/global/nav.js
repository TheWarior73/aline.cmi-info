/**
 * Retrieves the current directory's name, and several utility tools to use it.
 */


/**
 * Creates the navigation element in directories for navigation purposes
 */
function getnav() {
    const path = window.location.pathname;                                                  // cur path
    const segments = path.split('/').filter(seg => seg !== "");                             // removes empty segments

    let li = document.querySelector(".navigation li");
    let builtPath = "/";

    const Items = segments.map((segment, index) => {                                        // Capitalize the segment
        const name = decodeURIComponent(segment).replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

                                                                                            
        builtPath += segment + "/";                                                         // Build the path up to this segment

        if (index === segments.length - 1) {                                                // If it's the last segment, mark it as active
            return `<arrow>»</arrow> <a href="" id="active">${name}</a>`;
        } else {
            return `<arrow>»</arrow> <a href="${builtPath}">${name}</a>`;
        }
    });

    li.innerHTML = `<a href="/">Home</a> ${Items.join(' ')}`;
}
