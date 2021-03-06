"use strict";

import {assert} from "chai";
import {Settings} from "../../src/bll/entities/settings";
import {SettingsImpl} from "../../src/bll/entities/settingsimpl";

suite("Settings", () => {

    test("should verify construction", function () {
        const settings: Settings = new SettingsImpl();
        assert.isObject(settings);
    });

    test("should verify setting false showSignInWelcome property", function (done) {
        const settings: Settings = new SettingsImpl();
        const temp = settings.showSignInWelcome;
        settings.setShowSignInWelcome(false).then(() => {
            const settings: Settings = new SettingsImpl();
            assert.equal(settings.showSignInWelcome, false);
            settings.setShowSignInWelcome(temp).then(() => {
                done();
            }).catch((err) => {
                done(err);
            });
        }).catch((err) => {
            done(err);
        });
    });

    test("should verify setting true showSignInWelcome property", function (done) {
        const settings: Settings = new SettingsImpl();
        const temp = settings.showSignInWelcome;
        settings.setShowSignInWelcome(true).then(() => {
            const settings: Settings = new SettingsImpl();
            assert.equal(settings.showSignInWelcome, true);
            settings.setShowSignInWelcome(temp).then(() => {
                done();
            }).catch((err) => {
                done(err);
            });
        }).catch((err) => {
            done(err);
        });
    });

    test("should verify setting lastUrl property", function (done) {
        const settings: Settings = new SettingsImpl();
        const testUrl: string = "http://localhost";
        const temp = settings.getLastUrl();
        settings.setLastUrl(testUrl).then(() => {
            const settings: Settings = new SettingsImpl();
            assert.equal(settings.getLastUrl(), testUrl);
            settings.setLastUrl(temp).then(() => {
                done();
            }).catch((err) => {
                done(err);
            });
        }).catch((err) => {
            done(err);
        });
    });

    test("should verify default lastUrl property", function (done) {
        const settings: Settings = new SettingsImpl();
        const temp = settings.getLastUrl();
        settings.setLastUrl(undefined).then(() => {
            const settings: Settings = new SettingsImpl();
            assert.equal(settings.getLastUrl(), "");
            settings.setLastUrl(temp).then(() => {
                done();
            }).catch((err) => {
                done(err);
            });
        }).catch((err) => {
            done(err);
        });
    });

    test("should verify setting lastUsername property", function (done) {
        const settings: Settings = new SettingsImpl();
        const testUser: string = "username";
        const temp = settings.getLastUsername();
        settings.setLastUsername(testUser).then(() => {
            const settings: Settings = new SettingsImpl();
            assert.equal(settings.getLastUsername(), testUser);
            settings.setLastUsername(temp).then(() => {
                done();
            }).catch((err) => {
                done(err);
            });
        }).catch((err) => {
            done(err);
        });
    });

    test("should verify default lastUsername property", function (done) {
        const settings: Settings = new SettingsImpl();
        const temp = settings.getLastUsername();
        settings.setLastUsername(undefined).then(() => {
            const settings: Settings = new SettingsImpl();
            assert.equal(settings.getLastUsername(), "");
            settings.setLastUsername(temp).then(() => {
                done();
            }).catch((err) => {
                done(err);
            });
        }).catch((err) => {
            done(err);
        });
    });

});
