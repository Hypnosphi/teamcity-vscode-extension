"use strict";

import {PatchSender} from "./patchsender";
import {CvsSupportProvider} from "../../dal/cvsprovider";
import {BuildConfigItem} from "../entities/buildconfigitem";

export interface PatchSender {
    /**
     * @returns true in case of success, otherwise false.
     */
    /* async */
    remoteRun(configs: BuildConfigItem[], cvsProvider: CvsSupportProvider): Promise<boolean>;
}
