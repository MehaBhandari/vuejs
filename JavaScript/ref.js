this.userName = ref("Mayank")

var ref  = {
    _value: "",
    get value() {
        return _value
    },
    set(inputValue) {
        this._value = inputValue;
        var isUiImpacted = detectChangeInDataImpactingUI();
        if (isUiImpacted == true) {
            TriggerUIUpdates();
        }
    }
}

console.log(userName.value)

userName.value = "SomeData";

var reactive= function(object) {
    return new Proxy(object)
}