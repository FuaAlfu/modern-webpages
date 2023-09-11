// Dummy data 
const statusData = [
    { serviceName: "Website", status: "Up" },
    { serviceName: "Database", status: "Down" },
    { serviceName: "API Server", status: "Up" },
    { serviceName: "Email Service", status: "Up" },
];

// Function to create and display status items
function createStatusItems() {
    const statusContainer = document.getElementById("status-container");

    statusData.forEach((data) => {
        const statusItem = document.createElement("div");
        statusItem.classList.add("status-item");

        const serviceName = document.createElement("div");
        serviceName.classList.add("service-name");
        serviceName.textContent = data.serviceName;

        const serviceStatus = document.createElement("div");
        serviceStatus.classList.add("service-status");
        serviceStatus.textContent = data.status;
        serviceStatus.classList.add(data.status === "Up" ? "status-up" : "status-down");

        statusItem.appendChild(serviceName);
        statusItem.appendChild(serviceStatus);

        statusContainer.appendChild(statusItem);
    });
}

// Call the function to populate the status items
createStatusItems();
