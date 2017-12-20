// src.js
var SummaryTool = require('node-summary');

var title = "Swayy is a beautiful new dashboard for discovering and curating online content [Invites]";
var content = "";
content += "Lior Degani, the Co-Founder and head of Marketing of Swayy, pinged me last week when I was in California to tell me about his startup and give me beta access. I heard his pitch and was skeptical. I was also tired, cranky and missing my kids – so my frame of mind wasn't the most positive.\n";
// ......
// .......
// self executing function here
(function() {
  
SummaryTool.summarize(title, content, function(err, summary) {
    if(err) console.log("Something went wrong man!");

    document.write(summary);

    console.log("Original Length " + (title.length + content.length));
    console.log("Summary Length " + summary.length);
    console.log("Summary Ratio: " + (100 - (100 * (summary.length / (title.length + content.length)))));
});

})();
