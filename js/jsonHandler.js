'use strict';
var jsonHandler = (function() {
	var createHeader = function(obj) {
			var result = '<thead><tr>';
			for(var key in obj)
				result= result+'<th>'+key+'</th>';
			result=result+'</tr></thead>';
			return result;
        },
		createRow = function(obj) {
			var result = '<tr>';
			for(var key in obj) {
				result= result+'<td>'+obj[key]+'</td>';
			}
				
			result=result+'</tr>';
			return result;
		},
		createBody = function(list) {
			var result = '<tbody>';
			for(var i=0;i<list.length;i++){
				var obj = list[i];
				result=result+createRow(obj);
			}
			result=result+'</tbody>';
			return result;
        },
        injectTable = function(list) {
            var out = '<div class="table-responsive"><table class="table">';
            out=out+createHeader(list[0]);
			out=out+createBody(list);
			out = out + '</table></div>';
            document.getElementById('jsonRequest').innerHTML = out;	
        };
	return {
		loadJsons: function() {
			var myRequest = new XMLHttpRequest();
			var url = 'horrors.json';
			myRequest.onreadystatechange = function() {
				if (myRequest.readyState == 4 && myRequest.status==200) {
					var jsonArray = JSON.parse(myRequest.responseText);
					injectTable(jsonArray);
					}
			};
			myRequest.open('GET', url, true);
			myRequest.send();
		}
		};
})();