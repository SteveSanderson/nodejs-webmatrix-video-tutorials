$(function() {
    // When running in apple-mobile-web-app-capable mode, iOS handles link clicks by opening Safari.
    // Workaround: use "location.href = ", which bypasses this and opens in the link in the standalone app.
    if (window.navigator.standalone && window.navigator.standalone) {
        $(document.body).on("click", "a", function() {
            location.href = this.href;
            return false;
        });
    }
});

ko.bindingHandlers.validate = {
    init: function(formElem, valueAccessor) {
        var options = valueAccessor(),
            onSubmitHandler = typeof options === "object" ? options.save : options;
        $(formElem).validate({ submitHandler: onSubmitHandler });
    }
};