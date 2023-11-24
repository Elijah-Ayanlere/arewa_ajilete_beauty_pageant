const voteCounts = {};

function voteForContestant(contestantNumber) {
    if (contestantNumber >= 1 && contestantNumber <= 12) {
        voteCounts[`contestant${contestantNumber}`] = (voteCounts[`contestant${contestantNumber}`] || 0) + 1;

        updateVoteCountUI(contestantNumber);

        displayTotalVotes();
    } else {
        console.error('Invalid contestant number.');
    }
}

function updateVoteCountUI(contestantNumber) {
    const voteCountElement = document.getElementById(`voteCountContestant${contestantNumber}`);
    if (voteCountElement) {
        voteCountElement.textContent = voteCounts[`contestant${contestantNumber}`];
    }
}

function displayTotalVotes() {
    const totalVotesElement = document.getElementById('totalVotes');
    if (totalVotesElement) {
        const totalVotes = Object.values(voteCounts).reduce((acc, count) => acc + count, 0);
        totalVotesElement.textContent = `Total Votes: ${totalVotes}`;
    }
}

for (let i = 1; i <= 12; i++) {
    const voteButton = document.getElementById(`voteButtonContestant${i}`);
    if (voteButton) {
        voteButton.addEventListener('click', () => voteForContestant(i));
    }
}
