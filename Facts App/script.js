const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

function createFactLists(data) {
  let html_arr = [];
  // Selecting DOM Elements.

  for (let index = 0; index < data.length; index++) {
    html_arr.push(`<li class="fact"> <p>
  ${data[index]["text"]}
  <a
    class="source"
    href="${data[index]["source"]}"
    target="_blank"
    >(Source)</a
  >
</p>
<span class="tag" style="background-color: ${
      CATEGORIES.find((ele) => ele.name === data[index]["Type of Content"]).color
    }"
  >${data[index]["Type of Content"]}</span
> </li>`);
  }

  // Removing the comma from the array.
  html_arr = html_arr.join("");
  facts_list.insertAdjacentHTML("afterbegin", html_arr);
}

async function loadFacts() {
  // Getting the data from Supavase.
  const response = await fetch(
    "https://agyuwhynyxwnryqpyxps.supabase.co/rest/v1/Facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFneXV3aHlueXh3bnJ5cXB5eHBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0NDA5MTgsImV4cCI6MjAwNDAxNjkxOH0.isKnSsFsRzjnFzsRu1LJdPjdkIqb-aC7517EaOzch0k",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFneXV3aHlueXh3bnJ5cXB5eHBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0NDA5MTgsImV4cCI6MjAwNDAxNjkxOH0.isKnSsFsRzjnFzsRu1LJdPjdkIqb-aC7517EaOzch0k",
      },
    }
  );

  const data = await response.json();
  createFactLists(data);
}

loadFacts();

const share_btn = document.querySelector(".share-button");
const form = document.querySelector(".fact-form");
const facts_list = document.querySelector(".facts-list");

// Creating DOM Eleements.
facts_list.innerHTML = "";

// Changing the visibility of the form.
// Clicking the share button will open up the form option for everyone.
// Clcicking the close button will close the form option.

share_btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    share_btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    share_btn.textContent = "Share a fact";
  }
});
