'use strict';

import rest from "rest";
import defaultRequest from "rest/interceptor/defaultRequest";
import mime from "rest/interceptor/mime";
import errorCode from "rest/interceptor/errorCode";
import baseRegistry from "rest/mime/registry";
import halJsonConverter from "rest/mime/type/application/hal";

let registry = baseRegistry.child();
registry.register('application/hal+json', halJsonConverter);

const RestClient = rest.wrap(mime, {registry: registry})
    .wrap(errorCode)
    .wrap(defaultRequest, {headers: {'Accept': 'application/hal+json'}});

export default RestClient;
