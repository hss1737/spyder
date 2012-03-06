//----------------------------------------------------------------------------
//  Copyright (C) 2012 - The Spyder Team
//
//  Distributed under the terms of the MIT License.
//----------------------------------------------------------------------------

//============================================================================
// On document ready
//============================================================================ 

{% if right_sphinx_version and math_on %}

$(document).ready(function () {

    // MathJax config
    // --------------
    MathJax.Hub.Config({
        // We are using SVG instead of HTML-CSS because the last one gives
        // troubles on QtWebkit. See this thread:
        // https://groups.google.com/forum/?fromgroups#!topic/mathjax-users/HKA2lNqv-OQ
        jax: ["input/TeX", "output/SVG"],

        // Menu options are not working. It would be useful to have 'Show TeX
        // commands', but it opens an external browser pointing to css_path.
        // I don't know why that's happening
        showMathMenu: false,
        messageStyle: "none",
        "SVG": {
            blacker: 1
        },
        
        // Change math preview size so that it doesn't look too big while
        // redendered
        {% if platform == 'win32' %}
        styles: {
            ".MathJax_Preview": {
                color: "#888",
                "font-size": "55%"
            }
        }
        {% endif %}
    });
    
    // Windows fix
    // -----------
    // Increase font size of math elements because they appear too small
    // compared to the surrounding text.
    // Use this hack because MathJax 'scale' option seems to not be working
    // for SVG.
    {% if platform == 'win32' %}
    $(document).ready( function () {
        $('.math').css("color", "transparent");
        $('.math').css("fontSize", "212%");
    });
    {% endif %}
}

{% endif %}