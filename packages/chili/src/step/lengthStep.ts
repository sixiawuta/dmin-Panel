// Copyright 2022-2023 the Chili authors. All rights reserved. MPL-2.0 license.

import { I18n, Precision, XYZ } from "chili-core";

import {
    LengthAtAxisSnapper,
    LengthAtPlaneSnapper,
    SnapLengthAtAxisData,
    SnapLengthAtPlaneData,
    Snapper,
} from "../snap";
import { StepBase } from "./step";

export class LengthAtAxisStep extends StepBase<SnapLengthAtAxisData> {
    constructor(tip: keyof I18n, handleData: () => SnapLengthAtAxisData, disableDefaultValidator = false) {
        super(tip, handleData, disableDefaultValidator);
    }

    protected override snapper(data: SnapLengthAtAxisData): Snapper {
        return new LengthAtAxisSnapper(data);
    }

    protected validator(data: SnapLengthAtAxisData, point: XYZ): boolean {
        return Math.abs(point.sub(data.point).dot(data.direction)) > Precision.Confusion;
    }
}

export class LengthAtPlaneStep extends StepBase<SnapLengthAtPlaneData> {
    constructor(tip: keyof I18n, handleData: () => SnapLengthAtPlaneData, disableDefaultValidator = false) {
        super(tip, handleData, disableDefaultValidator);
    }

    protected override snapper(data: SnapLengthAtPlaneData): Snapper {
        return new LengthAtPlaneSnapper(data);
    }

    protected validator(data: SnapLengthAtPlaneData, point: XYZ): boolean {
        let pointAtPlane = data.plane.project(point);
        return pointAtPlane.distanceTo(data.point) > 0;
    }
}
