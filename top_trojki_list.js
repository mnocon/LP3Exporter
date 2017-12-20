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

var element = document.createElement("input");
element.setAttribute("type", "button");
element.setAttribute("value", "WYSWIETL LISTE");
element.setAttribute("id", "moj_button_marek");
element.setAttribute("onclick", "alert(result)");
document.body.appendChild(element);
