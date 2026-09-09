const tweetInput = document.getElementById("tweetInput");
const charCount = document.getElementById("charCount");

tweetInput.addEventListener("input", function () {

    let length = tweetInput.value.length;

    charCount.textContent = `${length} / 280`;

    if (length > 280) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "#657786";
    }
});


function addTweet() {

    const text = tweetInput.value.trim();

    if (text === "") {
        alert("Please write something!");
        return;
    }

    if (text.length > 280) {
        alert("Your post cannot exceed 280 characters.");
        return;
    }

    const tweetContainer =
        document.getElementById("tweetContainer");

    const tweet = document.createElement("article");

    tweet.className = "tweet";

    tweet.innerHTML = `
        <div class="avatar">N</div>

        <div class="tweet-content">

            <h3>
                Nithya K
                <span>@nithya</span>
            </h3>

            <p>${text}</p>

            <div class="tweet-buttons">

                <button onclick="likeTweet(this)">
                    ♡ <span>0</span>
                </button>

                <button>
                    💬 0
                </button>

                <button>
                    ↗ Share
                </button>

            </div>

        </div>
    `;

    tweetContainer.prepend(tweet);

    tweetInput.value = "";
    charCount.textContent = "0 / 280";
}


function likeTweet(button) {

    const count = button.querySelector("span");

    let likes = parseInt(count.textContent);

    likes++;

    count.textContent = likes;

    button.textContent = `♥ ${likes}`;
}