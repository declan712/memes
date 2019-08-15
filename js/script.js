
function iterateResults(data) {

	console.log(data);

	var recordTemplate = $(".record-template");

	$.each(data.result.records, function(recordID, recordValue) {

		var recordName = recordValue["Name"];
		// var recordYear = getYear(recordValue["date"]);
		var recordBranch = recordValue["Branch"];
		var recordPosition = recordValue["Position"];
		var recordPay = recordValue["Remuneration"];
        var recordRemarks = recordValue["Remarks"];

		if(recordName && recordBranch && recordPosition && recordPay && recordRemarks) {
			var clonedRecordTemplate = recordTemplate.clone();
			clonedRecordTemplate.attr("id", "record-" + recordID).removeClass("record-template");
			clonedRecordTemplate.appendTo("#records");

			$("#record-" + recordID + " h2").html(recordName);
            // $("#record-" + recordID + " .year").html(recordYear);
            $("#record-" + recordID + " .branch").html(recordBranch);
            $("#record-" + recordID + " .position").html(recordPosition);
            $("#record-" + recordID + " .pay").html(recordPay);
            $("#record-" + recordID + " .remarks").html(recordRemarks);
        
			// $("#record-" + recordID + " img").attr("src", recordImage);

		}

	});

}
// $.ajax({
// 	url: "http://proxy.interaction.courses/https://cat-fact.herokuapp.com/facts",
// 	dataType: "jsonp",
// 	success: function(results) {
// 		console.log(results);
// 		jsonAsString = JSON.stringify(results, null, 2);
// 		$("#results").html(jsonAsString);
// 	}
// });

$(document).ready(function() {
var data = {
    resource_id: 'cdafbbbf-c9ca-46a1-9f18-ecd9e8943040', // the resource id
    limit: 5, // get 5 results
    q: 'connor' // query for 'X'
  };
  $.ajax({
    url: 'https://data.qld.gov.au/api/3/action/datastore_search',
    data: data,
    //dataType: 'jsonp',
    cache: true,
    success: function(data) {
    //   alert('Total results found: ' + data.result.total)
    //   jsonAsString = JSON.stringify(data, null, 2);
    //   $("#results").html(jsonAsString);
        iterateResults(data);
    }
  });

});