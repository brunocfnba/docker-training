$().ready(function () {

    
    function show_data() {
        $.ajax({
            type: "GET",
            url : "list",
            contentType: "application/json",
            processData: false,
            dataType: "json",
            success : function (response) {
                $("#mylist").empty();
                $.each(response, function (k, v) {
                    $("#mylist").append("<li>" + v + "</li>");
                });
            },
            error : function (request, textStatus, errorThrown) {
                alert(request.status + ', Error: ' + request.statusText);
            }
        });
    }
    
    show_data();
    
    $("#add_prod_form").submit(function (event) {
        event.preventDefault();
        if (!$("#prod_name").val()) {
            alert("Product can't be empty!");
            return;
        }
		
		$.ajax({
			type: "GET",
	        url : "add/" + $("#prod_name").val(),

	        success : function (response) {
                show_data();
                $("#prod_name").val("");
				
	        },
	        error : function (request, textStatus, errorThrown) {
	            alert(request.status + ', Error: ' + request.statusText);
	        }
		});
	
	});
});
