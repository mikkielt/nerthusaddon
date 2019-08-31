suite("panel", function ()
{
    const expect = require("expect.js")
    suiteSetup(function ()
    {
        nerthus = {}
        nerthus.defer = function ()
        {
        }

        require("../NN_panel.js")

        const jsdom = require("jsdom")
        const {JSDOM} = jsdom
        const {window} = new JSDOM()
        const {document} = (new JSDOM('')).window
        global.document = document
        $ = require("jquery")(window)
        $.fn.load = function ()
        {
            return this
        } //load stub




        nerthus.panel.settings_translations = {
            "translate": "przetłumaczony"
        }

        nerthus.options = {
            "OPTION1": true,
            "OPTION2": false
        }
    })

    test("dummy", function ()
    {
    })

    test("translate", () =>
    {
        expect(nerthus.panel.translate_option("translate")).to.equal("przetłumaczony")
    })

    test("translate untranslatable", () =>
    {
        expect(nerthus.panel.translate_option("untranslatable")).to.equal("untranslatable")
    })

    test("settings_str returns jQuery object", () =>
    {
        const $obj = nerthus.panel.settings_str()
        expect($obj instanceof $).to.be(true)
    })

    test("settings_str_ni returns jQuery object", () =>
    {
        const $obj = nerthus.panel.settings_str_ni()
        expect($obj instanceof $).to.be(true)
    })

    test("settings_str passes without any options", () =>
    {
        nerthus.options = undefined
        expect(nerthus.panel.settings_str()).to.be.ok()
    })

    test("settings_str_ni passes without any options", () =>
    {
        nerthus.options = undefined
        expect(nerthus.panel.settings_str_ni()).to.be.ok()
    })

    test("settings_str passes with options", () =>
    {
        nerthus.options = {
            "OPTION1": true,
            "OPTION2": false
        }
        expect(nerthus.panel.settings_str()).to.be.ok()
    })

    test("settings_str_ni passes with options", () =>
    {
        nerthus.options = {
            "OPTION1": true,
            "OPTION2": false
        }
        expect(nerthus.panel.settings_str_ni()).to.be.ok()
    })

    test("panel_string returns false when no panel data provided", () =>
    {
        const $obj = nerthus.panel.panel_string()
        expect($obj).to.be(false)
    })

    test("panel_string returns jQuery object", () =>
    {
        const panel_data = {
            forum: "FORUM",
            panel_info: "INFO",
            links: "LINKS"
        }

        const $obj = nerthus.panel.panel_string(panel_data)
        expect($obj instanceof $).to.be(true)
    })

})
