$(document).ready(function () {
    var listItems = $('#list-items');
    var todoListItem = $('#todo-list-item');

    listItems.html(localStorage.getItem('listItems'));

    $('.add-items').submit(function(event) {
        event.preventDefault();
        var item = todoListItem.val().trim();
        if(item) {
            listItems.prepend("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
            updateLocalStorage();
            todoListItem.val("");
        }
    });

    $(document).on('change', '.checkbox', function() {
        var parent = $(this).parent();
        parent.toggleClass('completed');
        updateLocalStorage();
    });

    $(document).on('click', '.remove', function() {
        $(this).parent().remove();
        updateLocalStorage();
    });

    function updateLocalStorage() {
        localStorage.setItem('listItems', listItems.html());
    }
});
