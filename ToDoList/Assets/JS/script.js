$(document).ready(function () {
    // click li to mark completed
    //ul used needed to account for future li's
    $("ul").on("click", "li", function () {
        $(this).toggleClass("completed");
    });

    // click on span to remove li
    $("ul").on("click", "span", function (e) {
        //$(this).parent() refers to span's next layer
        //ie li
        $(this).parent().slideUp(500, function () {
            //$(this).parent() is now this
            $(this).remove();
        });
        // prevent higher up triggers activating
        e.stopPropagation();
    });

    $("input[type='text']").keypress(function (event) {
        if (event.which === 13) {
            // save text to var
            var nextToDo = $(this).val();

            // create new li and add to ul
            $("ul").append('<li><span><i class="fa fa-trash"></i></span> ' + nextToDo + "</li>");

            $(this).val("");
        }
    });

});