import './../css/bootstrap.css';
import './../css/styles.css';
import { Entry } from './journal.js';

$(document).ready(function(){

  $("#newSubmission").click(function(){
   
    var title = $("#title").val();
    var body = $("#entry").val();
    var newEntry = new Entry(title, body);
   
    var wordCount = newEntry.numberOfWords();
    var vowelCount = newEntry.vowels();
    var conCount = newEntry.cons();
    var teaserText = newEntry.getTeaser();

    $("#teaserOutput").html("Teaser: " + teaserText);
    $("#wordCountOutput").text("Word Count: " + wordCount);
    $("#vowelCountOutput").text("Vowel Count: " + vowelCount);
    $("#conCountOutput").text("Consonants Count: " + conCount);

  });

}); 