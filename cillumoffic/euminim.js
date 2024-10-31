function httpLoader(fetch) {
    return async function(url) {
        try {
            // Perform the HTTP fetch operation
            const response = await fetch(url);

            // Check if the response is okay (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the response body as JSON
            const data = await response.json();

            // Return the parsed data
            return data;
        } catch (error) {
            // Handle any errors that occurred during the fetch operation
            console.error("Fetch error:", error);
            throw error;
        }
    };
}

// Usage example with the native fetch function
const load = httpLoader(fetch);

// Example URL
const url = "https://api.example.com/data";

load(url)
    .then(data => {
        console.log("Data loaded:", data);
    })
    .catch(error => {
        console.error("Error loading data:", error);
    });
