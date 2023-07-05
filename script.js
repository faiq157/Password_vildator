(function() {
    let password = document.querySelector('.password');
    let helper_text = {
        charLength: document.querySelector('.helper_text .length'),
        lowercase: document.querySelector('.helper_text .lowercase'),
        uppercase: document.querySelector('.helper_text .uppercase'),
        special: document.querySelector('.helper_text .special')
    };

    password.addEventListener('keyup', function() {
        patternTest(pattern.charLength(), helper_text.charLength);
        patternTest(pattern.lowercase(), helper_text.lowercase);
        patternTest(pattern.uppercase(), helper_text.uppercase);
        patternTest(pattern.special(), helper_text.special);

        if (
            hasClass(helper_text.charLength, 'valid') &&
            hasClass(helper_text.lowercase, 'valid') &&
            hasClass(helper_text.uppercase, 'valid') &&
            hasClass(helper_text.special, 'valid')
        ) {
            addClass(password.el, 'valid');
        } else {
            removeClass(password.el, 'valid');
        }
    });

    let pattern = {
        charLength: function() {
            if (password.value.length >= 8) {
                return true;
            }
        },
        lowercase: function() {
            let regex = /^(?=.*[a-z]).+$/;
            if (regex.test(password.value)) {
                return true;
            }
        },
        uppercase: function() {
            let regex = /^(?=.*[A-Z]).+$/;
            if (regex.test(password.value)) {
                return true;
            }
        },
        special: function() {
            let regex = /^(?=.*[0-9_\W]).+$/;
            if (regex.test(password.value)) {
                return true;
            }
        }
    };

    function removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(
                new RegExp("(^|\\b)" + className.split(' ').join('|') + "(\\b|$)", 'gi'),
                " "
            );
        }
    }

    function hasClass(el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        } else {
            return new RegExp("(^|\\b)" + className + "(\\b|$)", 'gi').test(el.className);
        }
    }

    function patternTest(pattern, response) {
        if (pattern) {
            addClass(response, 'valid');
        } else {
            removeClass(response, 'valid');
        }
    }

    function addClass(el, className) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += " " + className;
        }
    }
})();

// listen for keyup action on password field

