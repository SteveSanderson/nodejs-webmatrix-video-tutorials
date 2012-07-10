// "vote" class to ensure the data matches the intended schema

function vote(data) {
    this.name = String(data.name) || "Anonymous";
    this.choices = (data.choices || []).map(Number);
}

module.exports = vote;