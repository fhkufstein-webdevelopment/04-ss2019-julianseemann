$(document).ready(function() {

    var userListBody = $('.userList tbody');

    //@todo store and somehow update the current number of users


    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        var username_element = document.getElementById('username');
        var username = username_element.value;
        userListBody.push(username);
        var currentLength = userListBody.length;

        var table = document.getElementById('table');
        var row = table.insertRow(-1);



        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = currentLength;
        cell2.innerHTML = username;
        cell3.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"Löschen\"><i class=\"fa fa-trash\"></i></button>";

        userZaehler ++;
        return false;
        });

        $(userListBody).on('click', '.deleteTrigger', function(){
        $(this).closest('tr').remove();

        });


        });


});