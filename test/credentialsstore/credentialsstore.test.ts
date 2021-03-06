"use strict";

import {assert} from "chai";
import {Credentials} from "../../src/bll/credentialsstore/credentials";
import {CredentialsStoreImpl} from "../../src/bll/credentialsstore/credentialsstoreimpl";

suite("CredentialStore", function () {

    test("should verify constructor", function () {
        const cs: CredentialsStoreImpl = new CredentialsStoreImpl();
        assert.equal(cs.getCredential(), undefined);
    });

    test("should verify set/getCredential", function () {
        const credentials: Credentials = new Credentials("http://localhost:8239", "user", "password", "1", "xxx");
        const cs: CredentialsStoreImpl = new CredentialsStoreImpl();
        cs.setCredential(credentials);
        assert.equal(cs.getCredential(), credentials);
    });

    test("should verify set/getCredential - rewriting", function () {
        const credentials: Credentials = new Credentials("http://localhost:7239", "user", "password", "1", "xxx");
        const credentials2: Credentials = new Credentials("http://localhost:4239", "user2", "password2", "2", "yyy");
        const cs: CredentialsStoreImpl = new CredentialsStoreImpl();
        cs.setCredential(credentials);
        cs.setCredential(credentials2);
        assert.equal(cs.getCredential(), credentials2);
    });

    test("should verify removeCredential", function () {
        const credentials: Credentials = new Credentials("http://localhost", "user", "password", "1", "xxx");
        const cs: CredentialsStoreImpl = new CredentialsStoreImpl();
        cs.setCredential(credentials);
        cs.removeCredential();
        assert.equal(cs.getCredential(), undefined);
    });
});
