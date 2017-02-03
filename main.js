$(document).ready(function() {
    //Run code when search icon is clicked on
    $("#search").click(function() {
        //Get value of input field
        var searchTerm = $("#searchTerm").val();
        //Run ajax and get return in data type JSON
        var url =
            "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
            searchTerm + "&format=json&callback=?";
        //Wikipedia API ajax call
        console.log(url);
        $.ajax({
            type: "GET",
            url: url,
            contentType: "application/json; charset-utf-8",
            async: false,
            dataType: "json",
            success: function(data, textStatus, jqXHR) {
                // console.log(data[1][0]);
                // Get descption console.log(data[2][0]);
                // Get link console.log(data[3][0]);
                $("output").html('');
                for (var i = 0; i < data[1].length; i++) {
                    $('#output').append(
                        "<div class='container'><div class='btn'><a  href= " +
                        data[3][i] + "><h4>" +
                        data[1][i] + "</h4>" +
                        "<p>" + data[2][i] +
                        "</p></a></div></div>");
                    //Reset the value so the search box is empty after results are displayed
                    $("#searchTerm").val('');
                }
            },
            //If there's no value, return 'Error'
            error: function(errorMessage) {
                alert("Error");
            }
        });
    });
    //Search by pressing the 'Enter'(e) key
    $("#searchTerm").keypress(function(e) {
        if (e.which == 13) {
            $("#search").click();
        }
    });
});
