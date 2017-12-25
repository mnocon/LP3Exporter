var rows = document.getElementsByTagName('tr');
var votedSongs = [];

for (var i = 0; i < rows.length; i++) {
    var checkbox = rows[i].getElementsByClassName('chk');
    if (checkbox.length > 0 && checkbox[0].checked)
    {
        votedSongs.push(rows[i]);
    }
}

var result = '';

for (var i = 0; i < votedSongs.length; i++)
{
    var artist = votedSongs[i].getElementsByClassName('bArtist')[0].textContent;
    var title = votedSongs[i].getElementsByClassName('bTitle')[0].textContent;
    result += (i + 1) + '\t' + artist + ' ' + title + '\t' + '\n';
}

var textarea = document.createElement("textarea");
textarea.id = "lp3ExportFeature";
textarea.cols = "100";
textarea.rows = "10";
textarea.textContent = result;
target = document.getElementById('divCenter');
target.appendChild(textarea);
alert('Your votes are displayed at the bottom of the page.');
